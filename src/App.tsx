import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Layout } from 'components/common/layout/layout';
import MainPage from 'components/main/main';
import SwapPage from 'components/swap/swap';

import GlobalStyles from 'styles/globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="swap" element={<SwapPage />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
