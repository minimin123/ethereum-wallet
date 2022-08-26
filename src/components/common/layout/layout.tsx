import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './header/header';
import { color } from 'styles/theme';
import { media } from 'styles/media';

export const Layout = () => {
  return (
    <DefaultLayout>
      <Contents>
        <Header />
        <Outlet />
      </Contents>
    </DefaultLayout>
  );
};

const DefaultLayout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${color.GRAY02};
`;

const Contents = styled.div`
  width: 80vw;
  margin: 0 auto;

  @media ${media.TABLET} {
    width: 85vw;
  }

  @media ${media.MOBILE} {
    width: 100%;
  }
`;
