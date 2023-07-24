import React, { FC } from 'react';
import { FavoritesListProps } from './types';
import { FlatList } from 'react-native';
import { FavoriteCard } from '~/components/molecules/FavoriteCard';
import { Show } from '~/services/types';
import { useNavigation } from '@react-navigation/native';

const FavoritesList: FC<FavoritesListProps> = ({ data }) => {
  const { navigate } = useNavigation();
  const onPressItem = (item: Show) => {
    if (!item.id) {
      return;
    }
    navigate('details', {
      screen: '/series-detail',
      params: {
        serieId: item.id.toString(),
      },
    });
  };

  const renderCard = ({ item }: { item: Show }) => (
    <FavoriteCard
      image={item.image?.medium}
      onPress={() => onPressItem(item)}
      onStarPress={() => {}}
      serieName={item.name}
    />
  );

  return (
    <FlatList
      keyExtractor={item => `${item.id}`}
      data={data}
      contentContainerStyle={{ paddingTop: 20 }}
      showsVerticalScrollIndicator={false}
      renderItem={renderCard}
    />
  );
};

export { FavoritesList };
