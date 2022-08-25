import { InvalidEvent, useState } from 'react';
import SearchBar from './searchBar/searchBar';
import { Wrap } from './swap.styles';
import { ISelectedToken } from 'types/types';
import { ArrowDownIcon, DownIcon, UpIcon } from 'assets';
import Default from 'assets/svgs/icon-default.svg';
import Option from './options/option';

const SwapPage = () => {
  const [isCurrentSearchOpen, setIsCurrentSearchOpen] = useState(false);
  const [isSelectedSearchOpen, setIsSelectedSearchOpen] = useState(false);
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const [currentToken, setCurrentToken] = useState<ISelectedToken>({
    iconUrl: '',
    symbol: '토큰 선택',
  });
  const [selectedToken, setSelectedToken] = useState<ISelectedToken>({
    iconUrl: '',
    symbol: '토큰 선택',
  });

  const [slippageLimit, setSlippageLimit] = useState<number | undefined>(2);

  const [userSlippageLimit, userSetSlippageLimit] = useState<
    number | undefined
  >(undefined);
  const [isSmartTransOn, setIsSmartTransOn] = useState(false);

  const handleClickSwap = () => {
    // 선택된 토큰이 없을 경우 early-return
    if (
      currentToken.symbol === '토큰 선택' &&
      selectedToken.symbol === '토큰 선택'
    ) {
      alert('토큰을 선택해주세요.');
      return;
    }

    // 스왑
    const temp = currentToken;
    setCurrentToken(selectedToken);
    setSelectedToken(temp);
  };

  const handleClickCurrentSearchBar = () => {
    setIsCurrentSearchOpen(prev => !prev);
  };

  const handleClickSelectedSearchBar = () => {
    setIsSelectedSearchOpen(prev => !prev);
  };

  const handleErrorImg = (e: InvalidEvent<HTMLImageElement>) => {
    e.target.src = Default;
  };

  return (
    <Wrap>
      {/* 헤더 */}
      <section className="swap-header">
        <h1>스왑</h1>
        <button>취소</button>
      </section>

      {/* 현재토큰 */}
      <section className="swap-body">
        <div className="swap-input">
          다음에서 스왑
          <div className="search-bar">
            {isCurrentSearchOpen && (
              <SearchBar
                setToken={setCurrentToken}
                except={selectedToken}
                toggle={handleClickCurrentSearchBar}
              />
            )}
          </div>
          {/* 토큰 검색 버튼 및 값 입력 */}
          <div className="swap-input-wrapper">
            <button onClick={handleClickCurrentSearchBar}>
              <div className="img-wrapper">
                <img src={currentToken.iconUrl} onError={handleErrorImg} />
              </div>
              <div className="text">{currentToken.symbol}</div>
            </button>
            <input placeholder="0" />
          </div>
        </div>
        <p>0 {currentToken.symbol} 스왑 가능</p>

        {/* 현재토큰 <-> 스왑할 토큰 변경 버튼 */}
        <div className="btn-wrapper">
          <button className="swap-btn" onClick={handleClickSwap}>
            <UpIcon />
            <DownIcon />
          </button>
        </div>

        {/* 스왑할 토큰 */}
        <div className="swap-input">
          다음으로 스왑
          <div className="search-bar">
            {isSelectedSearchOpen && (
              <SearchBar
                except={currentToken}
                setToken={setSelectedToken}
                toggle={handleClickSelectedSearchBar}
              />
            )}
          </div>
          <div className="swap-input-wrapper">
            <button onClick={handleClickSelectedSearchBar}>
              <div className="img-wrapper">
                <img src={selectedToken.iconUrl} onError={handleErrorImg} />
              </div>
              <div className="text-2">{selectedToken.symbol}</div>
            </button>
          </div>
        </div>
      </section>

      {/* 상세옵션 선택부 */}
      <button
        className="options"
        onClick={() => setIsOptionOpen(prev => !prev)}
      >
        고급 옵션
        <ArrowDownIcon className={isOptionOpen ? 'down' : 'default'} />
      </button>
      {isOptionOpen && (
        <Option
          slippageLimit={slippageLimit}
          userSlippageLimit={userSlippageLimit}
          isSmartTransOn={isSmartTransOn}
          setSlippageLimit={setSlippageLimit}
          setIsSmartTransOn={setIsSmartTransOn}
          userSetSlippageLimit={userSetSlippageLimit}
        />
      )}

      <section className="swap-footer"></section>
    </Wrap>
  );
};

export default SwapPage;
