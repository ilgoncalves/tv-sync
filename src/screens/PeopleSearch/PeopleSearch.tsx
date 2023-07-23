import React, { FC } from 'react';
import { PeopleSearchProps } from './types';
import { Div } from 'react-native-magnus';
import { FlatList } from 'react-native';
import { ResultsText } from '~/components/atoms';
import { PersonCard } from '~/components/molecules';
import { Person } from '~/models';

const PeopleSearch: FC<PeopleSearchProps> = ({}) => {
  const text = 'mock';
  const data: Person[] = [];
  return (
    <Div bg="black" px={20} flex={1}>
      <FlatList
        ListHeaderComponent={<ResultsText text={text} />}
        contentContainerStyle={{ paddingTop: 30, paddingBottom: 100 }}
        keyExtractor={item => `${item.person.id}`}
        data={data}
        renderItem={({ item }) => (
          <PersonCard
            image={item.person.image.medium}
            onPress={() => {}}
            name={item.person.name}
          />
        )}
      />
    </Div>
  );
};

export { PeopleSearch };
