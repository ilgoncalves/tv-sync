import React, { FC } from 'react';
import { FavoritesListProps } from './types';
import { FlatList } from 'react-native';
import { FavoriteCard } from '~/components/molecules/FavoriteCard';
import { Serie } from '~/types/series';

const FavoritesList: FC<FavoritesListProps> = ({ data }) => {
  const renderCard = ({ item }: { item: Serie }) => (
    <FavoriteCard
      image={item.url}
      onPress={() => {}}
      onStarPress={() => {}}
      serieName={item.name}
    />
  );

  return (
    <FlatList
      keyExtractor={item => `${item.id}`}
      data={data}
      contentContainerStyle={{ paddingTop: 30 }}
      showsVerticalScrollIndicator={false}
      renderItem={renderCard}
    />
  );
};

export { FavoritesList };
