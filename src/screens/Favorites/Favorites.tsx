import { FC, useState } from 'react';
import { Div } from 'react-native-magnus';
import { FavoritesProps } from './types';
import { MainTemplate } from '~/components/templates';
import { TranslationsKeys } from '~/i18n';
import { useTranslation } from 'react-i18next';
import { FavoritesList } from '~/components/organisms';
import { SearchBar } from '~/components/molecules';

const Favorites: FC<FavoritesProps> = ({}) => {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState('');

  return (
    <MainTemplate title={t(TranslationsKeys.ListOfFavoritesTitle)}>
      <Div flex={1} px="md">
        <SearchBar value={searchText} onChangeText={setSearchText} />
        <FavoritesList data={[]} />
      </Div>
    </MainTemplate>
  );
};

export { Favorites };
