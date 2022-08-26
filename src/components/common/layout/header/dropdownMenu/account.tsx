import styled from 'styled-components';
import { useRef } from 'react';

import useOnClickOutside from 'hooks/useOnClickOutside';

import { media } from 'styles/media';
import { color } from 'styles/theme';
import {
  AccountImg,
  ChatIcon,
  CheckIcon,
  DownloadIcon,
  PlusIcon,
  SettingIcon,
  UsbIcon,
} from 'assets';
import { IDropdownProps } from 'types/types';

const AccountDropMenu = ({ toggle, btnRef }: IDropdownProps) => {
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, toggle, btnRef);

  const ACCOUNT_MENU = [
    { icon: <PlusIcon />, title: '계정 생성' },
    { icon: <DownloadIcon />, title: '계정 가져오기' },
    { icon: <UsbIcon />, title: '하드웨어 지갑 연결' },
  ];

  const SETTING_MENU = [
    { icon: <ChatIcon />, title: '지원' },
    { icon: <SettingIcon />, title: '설정' },
  ];

  return (
    <Wrap ref={menuRef}>
      <div className="title">
        내 계정
        <button>잠금</button>
      </div>

      <ul>
        <li className="account-list">
          <CheckIcon className="check" />
          <AccountImg className="account-img" />
          <div className="account-info">
            <span className="account-name">Account 1</span>
            <span className="account-balance">0 ETH</span>
          </div>
        </li>
      </ul>
      <div className="divider" />

      <ul>
        {ACCOUNT_MENU.map(item => (
          <li key={item.title}>
            {item.icon}
            {item.title}
          </li>
        ))}
      </ul>
      <div className="divider" />

      <ul>
        {SETTING_MENU.map(item => (
          <li key={item.title}>
            {item.icon}
            {item.title}
          </li>
        ))}
      </ul>
    </Wrap>
  );
};

export default AccountDropMenu;

const Wrap = styled.div`
  position: absolute;
  top: 58px;
  right: calc((100vw - 80vw) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  border-radius: 4px;
  background-color: ${color.WHITE};
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 2px 2px;
  color: ${color.BLACK};
  font-family: Euclid;
  z-index: 10;

  @media ${media.TABLET} {
    right: calc((100vw - 85vw) / 2);
  }

  @media ${media.MOBILE} {
    right: 16px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    padding: 14px;
    font-size: 1rem;
    border-bottom: 1px solid ${color.GRAY01};
    line-height: 1rem;

    button {
      color: ${color.BLUE};
      border: 1px solid ${color.BLUE};
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
      line-height: 140%;
      min-width: 59px;
      width: auto;
      border-radius: 50px;
      transition: ease-in-out 0.2s;
      :hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        transition: ease-in-out 0.2s;
      }
    }
  }

  ul {
    width: 100%;

    .account-list {
      display: flex;
      align-items: flex-start;
      padding: 16px 14px;

      .check {
        margin-right: 8px;
        fill: rgb(40, 167, 69);
      }

      .account-img {
        width: 24px;
        height: 24px;
        border-radius: 12px;
        margin-right: 12px;
        background-color: rgb(242, 166, 2);
      }

      .account-info {
        display: flex;
        flex-direction: column;

        .account-name {
          font-size: 1.125rem;
          line-height: 140%;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 200px;
          text-align: start;
        }

        .account-balance {
          font-size: 14px;
          line-height: 140%;
          color: ${color.GRAY03};
        }
      }
    }

    li {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 18px;
      font-size: 16px;
      color: ${color.BLACK};
      :hover {
        background-color: ${color.GRAY02};
        cursor: pointer;
      }

      svg {
        fill: #6a737d;
        margin-right: 8px;
      }
    }
  }
  .divider {
    width: 100%;
    height: 1px;
    border-top: 1px solid ${color.GRAY01};
  }
`;
