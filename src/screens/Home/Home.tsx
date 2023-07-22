import { FC } from 'react';
import { HomeProps } from './types';
import { MainTemplate } from '~/components/templates';
import { TranslationsKeys } from '~/i18n';
import { Text } from 'react-native-magnus';
import { useTranslation } from 'react-i18next';

const Home: FC<HomeProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <MainTemplate
      centralizeTitle={false}
      title={t(TranslationsKeys.HomeWelcome, { name: 'Igor' })}>
      <Text>Home</Text>
    </MainTemplate>
  );
};

export { Home };
