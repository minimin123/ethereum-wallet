import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './header/header';
import { color } from 'styles/theme';

export const Layout = () => {
  return (
    <DefaultLayout>
      <Header />
      <Outlet />
    </DefaultLayout>
  );
};

const DefaultLayout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${color.GRAY02};
`;
