import { FC } from 'react';
import { Div } from 'react-native-magnus';
import { FavoritesProps } from './types';
import { MainTemplate } from '~/components/templates';
import { TranslationsKeys } from '~/i18n';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { FavoritesList } from '~/components/organisms';
import { SearchBar } from '~/components/molecules';

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
    <MainTemplate title={t(TranslationsKeys.ListOfFavoritesTitle)}>
      <Div flex={1} px={20}>
        <SearchBar />
        <FavoritesList />
      </Div>
    </MainTemplate>
  );
};

export { Favorites };
