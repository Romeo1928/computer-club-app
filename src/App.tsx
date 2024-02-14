import { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Login } from 'components/Login';
import { MainPage } from 'components/MainPage.tsx';
import { ROUTES } from 'constants/routes.ts';

export const App: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.MAIN} element={<MainPage />} />
    </Routes>
  );
};
