import React, { FC } from 'react';
import { SeriesListProps } from './types';
import { FlatList } from 'react-native';
import { SeriesCard } from '~/components/molecules';
import { ResultsText } from '~/components/atoms';
import { Div } from 'react-native-magnus';
import { Show } from '~/models';
import { useNavigation } from '@react-navigation/native';
import { useSearchStore } from '~/stores';

const SeriesList: FC<SeriesListProps> = ({}) => {
  const { searchedShows, searchedQuery } = useSearchStore();
  const navigation = useNavigation();

  const renderCard = ({ item }: { item: Show }) => (
    <SeriesCard
      image={item.image?.medium}
      onPress={() => {
        navigation.navigate('details', {
          screen: '/series-detail',
          params: {
            serieId: item.id.toString(),
          },
        });
      }}
      title={item.name}
    />
  );

  return (
    <Div shadow="lg" px={20} flex={1}>
      <ResultsText text={searchedQuery} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 30, paddingBottom: 100 }}
        keyExtractor={item => `${item.id}`}
        data={searchedShows}
        renderItem={renderCard}
      />
    </Div>
  );
};

export { SeriesList };
