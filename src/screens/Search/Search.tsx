import { FC, useMemo, useState } from 'react';
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

  const { searchShows } = useSearchStore();

  const [searchText, setSearchText] = useState('');

  const handleSearch = async (query: string) => {
    await searchShows(query);
  };

  const optimizedSearch = useMemo<(toSearch: string) => void>(
    () => debounce((toSearch: string) => handleSearch(toSearch), 1000),
    [],
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
