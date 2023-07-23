import { FC, useEffect, useMemo, useState } from 'react';
import { SearchProps } from './types';
import { MainTemplate } from '~/components/templates';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '~/i18n';
import { Div } from 'react-native-magnus';
import { SearchTabs } from '~/navigation/search.tabs';
import { SearchBar } from '~/components/molecules';
import debounce from 'lodash.debounce';
import { useSearchStore } from '~/stores';

const Search: FC<SearchProps> = ({}) => {
  const { t } = useTranslation();

  const { searchShows, searchPeople, currentTabScreen, clear } =
    useSearchStore();

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    clear();
    setSearchText('');
  }, [currentTabScreen]);

  const handleSearch = async (query: string) => {
    if (currentTabScreen === 'serie-list') {
      return await searchShows(query);
    }

    return await searchPeople(query);
  };

  const optimizedSearch = useMemo<(toSearch: string) => void>(
    () => debounce((toSearch: string) => handleSearch(toSearch), 1000),
    [currentTabScreen],
  );

  return (
    <MainTemplate title={t(TranslationsKeys.SearchTitle)}>
      <Div px="md">
        <SearchBar
          value={searchText}
          onChangeText={text => {
            setSearchText(text);
            optimizedSearch(text);
          }}
        />
      </Div>
      <SearchTabs />
    </MainTemplate>
  );
};

export { Search };
