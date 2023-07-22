import { FC } from 'react';
import { Button } from 'react-native-magnus';
import { FavoritesProps } from './types';
import { MainTemplate } from '~/components/templates';
import { TranslationsKeys } from '~/i18n';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const Favorites: FC<FavoritesProps> = ({}) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  const goToSeriesDetails = () => {
    navigate('details', {
      screen: '/series-detail',
      params: { serieId: Math.random().toString() },
    });
  };
  return (
    <MainTemplate title={t(TranslationsKeys.FavoritesTitle)}>
      <Button onPress={goToSeriesDetails} variant="solid">
        Go to Details
      </Button>
    </MainTemplate>
  );
};

export { Favorites };
