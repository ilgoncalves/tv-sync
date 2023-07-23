import { FC, useState } from 'react';
import { SearchProps } from './types';
import { MainTemplate } from '~/components/templates';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '~/i18n';
import { Button, Div } from 'react-native-magnus';
import { useNavigation } from '@react-navigation/native';
import { SearchTabs } from '~/navigation/search.tabs';
import { SearchBar } from '~/components/molecules';

const Search: FC<SearchProps> = ({}) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  const [searchText, setSearchText] = useState('');

  const goToSeriesDetails = () => {
    navigate('details', {
      screen: '/series-detail',
      params: {
        serieId: Math.random().toString(),
      },
    });
  };

  const goToPersonDetails = () => {
    navigate('details', {
      screen: '/person-detail',
      params: {
        personId: Math.random().toString(),
      },
    });
  };

  return (
    <MainTemplate title={t(TranslationsKeys.SearchTitle)}>
      <Div px={20}>
        <SearchBar value={searchText} onChangeText={setSearchText} />
      </Div>
      <SearchTabs />
      <Button onPress={() => goToSeriesDetails()} />
    </MainTemplate>
  );
};

export { Search };
