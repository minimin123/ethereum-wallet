import { InvalidEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './searchBar/searchBar';
import Default from 'assets/svgs/icon-default.svg';
import Option from './options/option';
import { SwapReviewBtn, Wrap } from './swap.styles';
import { ArrowDownIcon, DownIcon, UpIcon } from 'assets';
import { ISelectedToken } from 'types/types';

const SwapPage = () => {
  const [isCurrentSearchOpen, setIsCurrentSearchOpen] = useState(false);
  const [isSelectedSearchOpen, setIsSelectedSearchOpen] = useState(false);
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const [currentToken, setCurrentToken] = useState<ISelectedToken>({
    iconUrl: '',
    symbol: '토큰 선택',
    amount: 0,
  });

  const [selectedToken, setSelectedToken] = useState<ISelectedToken>({
    iconUrl: '',
    symbol: '토큰 선택',
  });

  const [slippageLimit, setSlippageLimit] = useState<number | undefined>(2);
  const [userSlippageLimit, setUserSlippageLimit] = useState<
    number | undefined
  >(undefined);

  const [isSmartTransOn, setIsSmartTransOn] = useState(false);

  const [isBtnActive, setIsBtnActive] = useState(false);

  const navigate = useNavigate();

  // 스왑할 금액이 0이면 비활성화
  // 슬리패지를 사용자 맞춤형으로 설정하고, 설정한 슬리패지 한도가 15초과이면 버튼 비활성화
  useEffect(() => {
    if (
      selectedToken.symbol === '토큰 선택' ||
      currentToken.symbol === '토큰 선택' ||
      currentToken.amount === 0 ||
      currentToken.amount === undefined ||
      (slippageLimit === undefined &&
        userSlippageLimit &&
        userSlippageLimit > 15)
    ) {
      setIsBtnActive(false);
    } else {
      setIsBtnActive(true);
    }
  }, [slippageLimit, userSlippageLimit, currentToken, selectedToken]);

  console.log(currentToken.amount);

  const handleClickSwap = () => {
    // 선택된 토큰이 없을 경우 스와핑 early-return
    if (
      currentToken.symbol === '토큰 선택' &&
      selectedToken.symbol === '토큰 선택'
    ) {
      alert('토큰을 선택해주세요.');
      return;
    }

    // 스왑
    const temp = currentToken;
    setCurrentToken({
      ...currentToken,
      symbol: selectedToken.symbol,
      iconUrl: selectedToken.iconUrl,
    });
    setSelectedToken(temp);
  };

  console.log(currentToken);
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
        <button onClick={() => navigate(-1)}>취소</button>
      </section>

      {/* 현재토큰 */}
      <section className="swap-body">
        <div className="swap-input">
          다음에서 스왑
          <div className="search-bar">
            {isCurrentSearchOpen && (
              <SearchBar
                token={currentToken}
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
            <input
              placeholder="0"
              onChange={e =>
                setCurrentToken({
                  ...currentToken,
                  amount: Number(e.target.value),
                })
              }
            />
          </div>
        </div>

        {currentToken.symbol !== '토큰 선택' && (
          <p>0 {currentToken.symbol} 스왑 가능</p>
        )}

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
          isSmartTransOn={isSmartTransOn}
          setSlippageLimit={setSlippageLimit}
          setIsSmartTransOn={setIsSmartTransOn}
          setUserSlippageLimit={setUserSlippageLimit}
        />
      )}

      {/* 푸터 */}
      <section className="swap-footer">
        <SwapReviewBtn
          disabled={!isBtnActive}
          isActive={isBtnActive}
          onClick={() => {
            console.log(currentToken.amount);
          }}
        >
          스왑 검토
        </SwapReviewBtn>
        <p>서비스 약관</p>
      </section>
    </Wrap>
  );
};

export default SwapPage;
