import { FC } from 'react';

import {
  ActionIcon,
  Button,
  Group,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import { useTranslation } from 'react-i18next';

import classes from './styles/Demo.module.css';

export const App: FC = () => {
  const { t, i18n } = useTranslation();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (): void => {
    const newColorScheme = computedColorScheme === 'light' ? 'dark' : 'light';

    setColorScheme(newColorScheme);
  };

  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
  };

  return (
    <Group>
      <ActionIcon
        onClick={toggleColorScheme}
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        {computedColorScheme === 'light' ? (
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        ) : (
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        )}
      </ActionIcon>
      <Button onClick={() => changeLanguage('en')}>EN</Button>
      <Button onClick={() => changeLanguage('ru')}>RU</Button>
      <Text>{t('text')}</Text>
    </Group>
  );
};
