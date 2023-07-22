import { FC } from 'react';
import { Div, Text } from 'react-native-magnus';
import { SplashScreenProps } from './types';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '~/i18n';

const SplashScreen: FC<SplashScreenProps> = ({}) => {
  const { t } = useTranslation();
  return (
    <Div>
      <Text variant="headline1">{t(TranslationsKeys.LoginWelcome)}</Text>
    </Div>
  );
};

export { SplashScreen };
