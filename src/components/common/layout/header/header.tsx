import { ArrowDownIcon, Logo, AccountImg, FoxIcon } from 'assets';
import { useRef, useState } from 'react';

import { AppHeader } from './header.styles';

import NetworkDropMenu from './dropdownMenu/network';
import AccountDropMenu from './dropdownMenu/account';

const Header = () => {
  const [networkOpen, setNetworkOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const networkRef = useRef(null);
  const accountRef = useRef(null);

  const handleClickNetwork = () => {
    setNetworkOpen(prev => !prev);
  };

  const handleClickAccount = () => {
    setAccountOpen(prev => !prev);
  };

  return (
    <AppHeader>
      <div className="contents">
        <div className="logo">
          <Logo className="full-logo" />
          <FoxIcon className="fox-icon" />
        </div>

        <div className="menu">
          <button
            className="network-btn"
            onClick={handleClickNetwork}
            ref={networkRef}
          >
            <div className="icon" />
            <div className="text">이더리움 메인넷</div>
            <ArrowDownIcon />
          </button>
          {networkOpen && (
            <NetworkDropMenu toggle={handleClickNetwork} btnRef={networkRef} />
          )}

          <button
            className="account-btn"
            onClick={handleClickAccount}
            ref={accountRef}
          >
            <AccountImg />
          </button>
          {accountOpen && (
            <AccountDropMenu toggle={handleClickAccount} btnRef={accountRef} />
          )}
        </div>
      </div>
    </AppHeader>
  );
};

export default Header;
