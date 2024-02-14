import { FC } from 'react';

import { Button, Container, Flex, Group, Text } from '@mantine/core';
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import { auth } from 'firebaseConfig';

export const Login: FC = () => {
  const navigate = useNavigate();
  const googleSignUp = (): void => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(() => {
        navigate(ROUTES.MAIN);
      })
      .catch(() => {});
  };
  const githubSignUp = (): void => {
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider)
      .then(() => {
        navigate(ROUTES.MAIN);
      })
      .catch(() => {});
  };

  return (
    <Container p="20px" maw={400}>
      <Text size="xl" mb="20px">
        Войдите
      </Text>
      <Group>
        <Flex>
          <Button mr="10px" onClick={googleSignUp}>
            Продолжить с Google
          </Button>
          <Button onClick={githubSignUp}>Продолжить с Github</Button>
        </Flex>
      </Group>
    </Container>
  );
};
