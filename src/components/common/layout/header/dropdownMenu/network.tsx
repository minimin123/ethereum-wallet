import styled from 'styled-components';
import { useRef } from 'react';

import useOnClickOutside from 'hooks/useOnClickOutside';
import { CheckIcon } from 'assets';

import { media } from 'styles/media';
import { color } from 'styles/theme';

interface IProps {
  toggle: () => void;
  btnRef: React.MutableRefObject<null>;
}

const NetworkDropMenu = ({ toggle, btnRef }: IProps) => {
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, btnRef, toggle);

  return (
    <Wrap ref={menuRef}>
      <div className="title">네트워크</div>
      <div className="divider" />
      <ul>
        <li>
          <CheckIcon />
          <div className="icon" />
          이더리움 메인넷
        </li>
      </ul>
      <button>네트워크 추가</button>
    </Wrap>
  );
};

export default NetworkDropMenu;

const Wrap = styled.div`
  position: absolute;
  top: 58px;
  right: calc(((100% - 80vw) / 2) + 2px);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 309px;
  border-radius: 4px;
  background-color: ${color.WHITE};
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 2px 2px;
  padding: 16px 0;
  color: ${color.BLACK};

  @media ${media.TABLET} {
    right: calc(((100% - 85vw) / 2) + 2px);
  }

  @media ${media.MOBILE} {
    right: 2px;
  }

  .title {
    height: 25px;
    width: 120px;
    text-align: center;
    font-size: 1.125rem;
    line-height: 140%;
  }

  .divider {
    width: 100%;
    height: 1px;
    border-top: 1px solid ${color.GRAY01};
    margin: 10px 0;
  }

  ul {
    width: 100%;
    margin-bottom: 8px;

    li {
      display: flex;
      width: 100%;
      align-items: center;
      padding: 16px;
      font-size: 16px;
      :hover {
        background-color: ${color.GRAY02};
        cursor: pointer;
        border-radius: 5px;
      }

      .icon {
        width: 12px;
        height: 12px;
        background-color: ${color.MAINNET};
        border-radius: 50%;
        margin: 0 14px 0 4px;
      }
    }
  }

  button {
    width: 277px;
    border-radius: 100px;
    font-size: 0.875rem;
    line-height: 140%;
    font-weight: 500;
    padding: 0.75rem 1rem;
    color: ${color.BLUE};
    border: 1px solid ${color.BLUE};
    :hover {
      box-shadow: rgb(0.6, 0.28, 0.735, 0.045) 0px 2px 2px 2px;
    }
  }
`;
