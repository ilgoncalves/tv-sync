import React, { FC, useEffect } from 'react';
import { PeopleSearchProps } from './types';
import { Div } from 'react-native-magnus';
import { FlatList } from 'react-native';
import { ResultsText } from '~/components/atoms';
import { PersonCard } from '~/components/molecules';
import { useIsFocused } from '@react-navigation/native';
import { useSearchStore } from '~/stores';

const PeopleSearch: FC<PeopleSearchProps> = ({}) => {
  const { setCurrentTabScreen, searchedPeople, searchedQuery } =
    useSearchStore();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setCurrentTabScreen('people-search');
    }
  }, [isFocused]);

  return (
    <Div px={20} flex={1}>
      <ResultsText text={searchedQuery} />
      <FlatList
        contentContainerStyle={{ paddingBottom: 100 }}
        keyExtractor={item => `${item.id}`}
        data={searchedPeople}
        renderItem={({ item }) => (
          <PersonCard
            image={item.image?.medium}
            onPress={() => {}}
            name={item.name}
          />
        )}
      />
    </Div>
  );
};

export { PeopleSearch };
