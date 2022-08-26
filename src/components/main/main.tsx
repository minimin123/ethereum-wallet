import { useState } from 'react';

import MainHeader from './contentsheader/contentsHeader';
import ActivityTab from './tabs/activityTab';
import AssetTab from './tabs/assetTab';

import { BuyIcon, LogoETH, SendIcon, SwapIcon } from 'assets';

import { Main } from './main.styles';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const navigate = useNavigate();

  // 계정 정보
  const account = {
    name: 'Account 1',
    address: '0xcFa7aB0573aA0f274B242694F0174f94036f1917',
    balance: 0,
  };

  const MENU = [
    { icon: <BuyIcon />, title: '구매', url: '/' },
    { icon: <SendIcon />, title: '보내기', url: '/' },
    { icon: <SwapIcon />, title: '스왑', url: '/swap' },
  ];

  const TAB = [
    { title: '자산', contents: <AssetTab /> },
    { title: '활동', contents: <ActivityTab /> },
  ];

  const handleClickTab = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <Main>
      <div>
        <MainHeader account={account} />
        <section className="overview">
          <LogoETH className="logo-eth" />

          <article>
            <span>{account.balance} ETH</span>
            <span>${account.balance.toFixed(2)} USD</span>
          </article>

          <ul className="overview-menu">
            {MENU.map(item => (
              <li
                key={item.title}
                className="overview-li"
                onClick={() => navigate(item.url)}
              >
                <div className="li-icon">{item.icon}</div>
                {item.title}
              </li>
            ))}
          </ul>
        </section>

        <section className="tab">
          <ul className="tab-menu">
            {TAB.map((item, index) => (
              <li
                key={item.title}
                className={currentTab === index ? 'focused' : 'submenu'}
                onClick={() => handleClickTab(index)}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <div className="content-wrapper">{TAB[currentTab].contents}</div>
        </section>
      </div>

      <section className="support">
        <span>
          도움이 필요하신가요?
          <a href="https://support.metamask.io">MetaMask 지원</a>에 문의하세요.
        </span>
      </section>
    </Main>
  );
};

export default MainPage;
