import { ArrowDownIcon, Logo, AccountImg } from 'assets';
import { AppHeader } from './header.styles';

const Header = () => {
  return (
    <AppHeader>
      <div className="contents">
        <Logo />

        <div className="menu">
          <button className="network-btn">
            <div className="icon" />
            <div className="text">이더리움 메인넷</div>
            <ArrowDownIcon />
          </button>

          <button className="account-btn">
            <AccountImg />
          </button>
        </div>
      </div>
    </AppHeader>
  );
};

export default Header;
