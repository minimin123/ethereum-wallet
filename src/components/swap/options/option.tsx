import { ChangeEvent, Dispatch, FormEvent, Fragment, useState } from 'react';

import { InfoIcon } from 'assets';
import { Input, Wrap } from './option.styles';

import Toggle from '../toggle/toggle';

interface IProps {
  slippageLimit: number | undefined;
  isSmartTransOn: boolean;
  userSlippageLimit: number | undefined;
  setSlippageLimit: Dispatch<React.SetStateAction<number | undefined>>;
  setIsSmartTransOn: Dispatch<React.SetStateAction<boolean>>;
  userSetSlippageLimit: Dispatch<React.SetStateAction<number | undefined>>;
}

const Option = (props: IProps) => {
  const {
    slippageLimit,
    isSmartTransOn,
    userSlippageLimit,
    setSlippageLimit,
    setIsSmartTransOn,
    userSetSlippageLimit,
  } = props;

  const TOOLTIP_CONTENTS = {
    slippage:
      "주문 시점과 확인 시점 사이에 가격이 변동되는 현상을 '슬리패지'라고 합니다. 슬리패지가 '최대 슬리패지' 설정을 초과하면 스왑이 자동으로 취소됩니다.",
    smart:
      '제출하기 전에 거래를 시뮬레이션하면 거래 비용을 줄이고 실패율을 낮출수 있습니다.',
  };

  const [warning, setWarning] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('blue');

  const OPTIONS = [2, 3];

  // 맞춤형 옵션 설정 시 자릿수 최대 4자리 설정
  const handleOnInput = (e: any) => {
    if (e.target.value.length > 4) {
      e.target.value = e.target.value.substr(0, 4);
    }
  };

  const handleChangeLimitOption = (e: ChangeEvent<HTMLInputElement>) => {
    setSlippageLimit(Number(e.target.value));
  };

  const handleChangeToggle = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSmartTransOn(e.target.checked);
  };

  const handleTempValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (value === 0) {
      setWarning('');
      setBackgroundColor('blue');
    }
    if (value === 1) {
      setWarning('거래가 실패할 수도 있습니다. 최대 슬리패지가 너무 낮습니다.');
      setBackgroundColor('red');
    }
    if (value > 1 && value < 5) {
      setWarning('');
      setBackgroundColor('blue');
    }
    if (value >= 5 && value <= 15) {
      setWarning('슬리패지 금액이 아주 큽니다.');
      setBackgroundColor('red');
    }
    if (value > 15) {
      setWarning(
        '슬리패지 금액이 너무 커서 전환율이 좋지 않습니다. 슬리패지 허용치를 15% 값 이하로 줄이세요.',
      );
      setBackgroundColor('red');
    }

    userSetSlippageLimit(value);
    setSlippageLimit(undefined);
  };

  return (
    <Wrap>
      {/* 슬리패지 허용치 옵션 */}
      <div className="slippage-option">
        슬리패지 허용치
        {/* 아이콘 & 툴팁 */}
        <div className="icon-wrapper">
          <InfoIcon />
          <div className="tooltip">{TOOLTIP_CONTENTS.slippage}</div>
        </div>
        {/* 옵션 버튼 list */}
        {OPTIONS.map(item => (
          <Fragment key={item}>
            <input
              type="radio"
              name="slippage"
              id={String(item)}
              value={item}
              checked={item === slippageLimit}
              onChange={handleChangeLimitOption}
            />
            <label htmlFor={String(item)} className="option-btn">
              {item}%
            </label>
          </Fragment>
        ))}
        {/* 맞춤형 옵션 */}
        <input
          type="radio"
          name="slippage"
          id="user"
          onChange={handleChangeLimitOption}
        />
        <label htmlFor="user" className="option-btn user">
          맞춤형
          {/* 맞춤형 옵션 클릭시 인풋창 */}
          {slippageLimit !== 2 && slippageLimit !== 3 && (
            <Fragment>
              <Input
                type="number"
                onInput={handleOnInput}
                onChange={handleTempValue}
                color={backgroundColor}
              />
              <span>%</span>
            </Fragment>
          )}
        </label>
      </div>

      {/* 스마트거래 옵션 */}
      <div className="slippage-option">
        스마트 거래
        {/* 아이콘 & 툴팁 */}
        <div>
          <InfoIcon />
          <div className="tooltip">{TOOLTIP_CONTENTS.smart}</div>
        </div>
        {/* on & off 토글 */}
        <label className="toggle">
          <Toggle isChecked={isSmartTransOn} />
          {isSmartTransOn ? '켜기' : '끄기'}
          <input type="checkbox" onChange={handleChangeToggle} />
        </label>
      </div>
      <div className="warning">{warning}</div>
    </Wrap>
  );
};

export default Option;
