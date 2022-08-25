import { debounce } from 'lodash';
import {
  ChangeEvent,
  Dispatch,
  InvalidEvent,
  MouseEvent,
  useRef,
  useState,
} from 'react';

import { TOKENS } from '../data/tokens';
import { TOP_ASSETS } from '../data/topAssets';

import { ISelectedToken, IToken } from 'types/types';

import { Wrap } from './searchBar.styles';

import { SearchIcon } from 'assets';
import spinner from '../../../assets/images/spinner.gif';
import useOnClickOutside from 'hooks/useOnClickOutside';

interface IProps {
  setToken: Dispatch<React.SetStateAction<ISelectedToken>>;
  toggle: () => void;
  except: ISelectedToken;
}

const SearchBar = ({ setToken, toggle, except }: IProps) => {
  // 선택한 다른 토큰은 목록에 보이지 않도록 예외처리
  const defaultList = TOP_ASSETS.filter(
    result => result.symbol !== except.symbol,
  );

  const [keyword, setKeyword] = useState('');
  const [list, setList] = useState<IToken[]>(defaultList);

  const menuRef = useRef(null);

  useOnClickOutside(menuRef, toggle);

  // 검색어 필터
  const debounceSearch = debounce(() => {
    // 검색어 대소문자 구분 없이 name 혹은 symbol에 포함되는 목록 필터
    const keywordList: IToken[] = TOKENS.filter(
      result =>
        result.name?.includes(keyword.toUpperCase()) ||
        result.symbol?.toUpperCase().includes(keyword.toUpperCase()),
    );
    // 그중에서 선택한 다른토큰은 제외
    const filteredList: IToken[] = keywordList.filter(
      result => result.symbol !== except.symbol,
    );

    setList(filteredList.splice(0, 30));
  }, 700);

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    debounceSearch();
  };

  const handleErrorImg = (e: InvalidEvent<HTMLImageElement>) => {
    e.target.src = spinner;
  };

  const handleClickResult = (e: MouseEvent<HTMLLIElement>) => {
    setToken({
      symbol: e.currentTarget.dataset.symbol,
      iconUrl: e.currentTarget.dataset.icon,
    });
    toggle();
  };

  return (
    <Wrap ref={menuRef}>
      <input
        type="text"
        onChange={handleChangeKeyword}
        placeholder="토큰 검색"
      />
      <SearchIcon className="search-icon" />
      <ul>
        {list.map(item => (
          <li
            key={item.symbol}
            data-symbol={item.symbol}
            data-icon={item.iconUrl}
            onClick={handleClickResult}
          >
            <img src={item.iconUrl} onError={handleErrorImg} />
            <dl>
              <dt>{item.symbol}</dt>
              <dd>{item.name}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </Wrap>
  );
};

export default SearchBar;
