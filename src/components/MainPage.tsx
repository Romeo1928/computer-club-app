import { FC } from 'react';

import { Button } from '@mantine/core';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import { auth } from 'firebaseConfig';

export const MainPage: FC = () => {
  const navigate = useNavigate();
  const logout = (): void => {
    signOut(auth)
      .then(() => {
        navigate(ROUTES.LOGIN);
      })
      .catch(() => {});
  };

  return (
    <div>
      MainPage
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};
