import { useRef, useState } from 'react';
import { BullseyeIcon, CopyIcon, DotsIcon, LinkIcon, QrIcon } from 'assets';
import { ContentsHeader } from './contentsHeader.styles';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { IAccount } from 'types/types';

const MainHeader = ({ account }: IAccount) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const btnRef = useRef(null);

  const handleClickToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  useOnClickOutside(menuRef, btnRef, handleClickToggle);

  const addressAbbr =
    account.address.slice(0, 5) + '...' + account.address.slice(-4);

  const copy = (text: string) => {
    if (navigator.clipboard)
      navigator.clipboard.writeText(text).then(() => setIsCopied(true));
  };

  const MENU = [
    { icon: <LinkIcon />, title: ' Etherscan에서 계정 보기' },
    { icon: <QrIcon />, title: '계정 세부 정보' },
    { icon: <BullseyeIcon />, title: '연결된 사이트' },
  ];

  return (
    <ContentsHeader>
      <button
        className="selected-account"
        onClick={() => copy(account.address)}
        onMouseLeave={() => setIsCopied(false)}
      >
        <span>{account.name}</span>

        <abbr>
          {addressAbbr}
          <CopyIcon className="copy-icon" />
        </abbr>

        <div className="tooltip">
          {isCopied ? '복사 완료' : '클립보드에 복사'}
        </div>
      </button>

      <div className="button-wrapper">
        <button
          className="menu-button"
          onClick={handleClickToggle}
          ref={btnRef}
        >
          <DotsIcon className="menu" />

          {isMenuOpen && (
            <ul className="toggle-menu" ref={menuRef}>
              {MENU.map(item => (
                <li key={item.title}>
                  {item.icon}
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </button>
      </div>
    </ContentsHeader>
  );
};

export default MainHeader;
