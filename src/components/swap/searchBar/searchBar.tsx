import { debounce } from 'lodash';
import { ChangeEvent, InvalidEvent, useState } from 'react';

import { TOKENS } from '../data/tokens';
import { TOP_ASSETS } from '../data/topAssets';

import { IToken } from 'types/types';

import { SearchIcon } from 'assets';
import { Wrap } from './searchBar.styles';
import spinner from '../../../assets/images/spinner.gif';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const [list, setList] = useState<IToken[]>(TOP_ASSETS);

  const debounceSearch = debounce(() => {
    const tempList: IToken[] = TOKENS.filter(
      result =>
        result.name?.includes(keyword.toUpperCase()) ||
        result.symbol?.toUpperCase().includes(keyword.toUpperCase()),
    );
    setList(tempList.splice(0, 30));
  }, 700);

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    debounceSearch();
  };

  const handleErrorImg = (e: InvalidEvent<HTMLImageElement>) => {
    e.target.src = spinner;
  };

  console.log(list);

  return (
    <Wrap>
      <input
        type="text"
        onChange={handleChangeKeyword}
        placeholder="토큰 검색"
      />
      <SearchIcon />
      <ul>
        {list.map(item => (
          <li key={item.symbol}>
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
