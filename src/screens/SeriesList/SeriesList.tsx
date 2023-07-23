import React, { FC } from 'react';
import { SeriesListProps } from './types';
import { FlatList } from 'react-native';
import { SeriesCard } from '~/components/molecules';
import { ResultsText } from '~/components/atoms/ResultsText';
import { Div } from 'react-native-magnus';
import { Show } from '~/models';
import { useSearchStore } from '~/stores/useSearchStore/store';

const SeriesList: FC<SeriesListProps> = ({}) => {
  const { searchedShows, searchedQuery } = useSearchStore();

  const renderCard = ({ item }: { item: Show }) => (
    <SeriesCard
      image={item.image?.medium}
      onPress={() => {}}
      title={item.name}
    />
  );

  return (
    <Div bg="black" px={20} flex={1}>
      <FlatList
        contentContainerStyle={{ paddingTop: 30, paddingBottom: 100 }}
        ListHeaderComponent={<ResultsText text={searchedQuery} />}
        keyExtractor={item => `${item.id}`}
        data={searchedShows}
        renderItem={renderCard}
      />
    </Div>
  );
};

export { SeriesList };
