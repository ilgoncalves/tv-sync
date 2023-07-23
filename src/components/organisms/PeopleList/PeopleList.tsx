import React, { FC } from 'react';
import { Div } from 'react-native-magnus';
import { PeopleListProps } from './types';
import { PersonCard } from '~/components/molecules/PersonCard';
import { FlatList } from 'react-native';
import { ResultsText } from '~/components/atoms/ResultsText';

const PeopleList: FC<PeopleListProps> = ({ data, text }) => {
  return (
    <Div bg="black" px={20} flex={1}>
      <FlatList
        ListHeaderComponent={<ResultsText text={text} />}
        contentContainerStyle={{ paddingTop: 30, paddingBottom: 100 }}
        keyExtractor={item => `${item.id}`}
        data={data}
        renderItem={({ item }) => (
          <PersonCard image={item.url} onPress={() => {}} name={item.name} />
        )}
      />
    </Div>
  );
};

export { PeopleList };
