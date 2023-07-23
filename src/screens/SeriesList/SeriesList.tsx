import React, { FC } from 'react';
import { SeriesListProps } from './types';
import { FlatList } from 'react-native';
import { SeriesCard } from '~/components/molecules';
import { ResultsText } from '~/components/atoms/ResultsText';
import { Div } from 'react-native-magnus';
import { Serie } from '~/types/series';

const SeriesList: FC<SeriesListProps> = ({ data, text }) => {
  const renderCard = ({ item }: { item: Serie }) => (
    <SeriesCard image={item.url} onPress={() => {}} title={item.name} />
  );

  return (
    <Div bg="black" px={20} flex={1}>
      <FlatList
        contentContainerStyle={{ paddingTop: 30, paddingBottom: 100 }}
        ListHeaderComponent={<ResultsText text={text} />}
        keyExtractor={item => `${item.id}`}
        data={data}
        renderItem={renderCard}
      />
    </Div>
  );
};

export { SeriesList };
