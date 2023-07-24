import { FC } from 'react';
import { Div } from 'react-native-magnus';
import { FavoritesProps } from './types';
import { MainTemplate } from '~/components/templates';
import { TranslationsKeys } from '~/i18n';
import { useTranslation } from 'react-i18next';
import { FavoritesList } from '~/components/organisms';
import { useFavoritesShows } from '~/stores';

const Favorites: FC<FavoritesProps> = ({}) => {
  const { t } = useTranslation();
  const { favoriteShows } = useFavoritesShows();

  return (
    <MainTemplate title={t(TranslationsKeys.ListOfFavoritesTitle)}>
      <Div flex={1} px="md">
        <FavoritesList
          data={favoriteShows.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })}
        />
      </Div>
    </MainTemplate>
  );
};

export { Favorites };
