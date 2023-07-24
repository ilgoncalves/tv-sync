import React, { FC } from 'react';
import { FavoritesListProps } from './types';
import { FlatList } from 'react-native';
import { FavoriteCard } from '~/components/molecules/FavoriteCard';
import { Show } from '~/services/types';
import { useNavigation } from '@react-navigation/native';
import { EmptyDataComponent } from '~/components/atoms';
import { useShowStore } from '~/stores';

const FavoritesList: FC<FavoritesListProps> = ({ data }) => {
  const { navigate } = useNavigation();
  const { setDetailLoading } = useShowStore();

  const onPressItem = (item: Show) => {
    if (!item.id) {
      return;
    }

    setDetailLoading(true);
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
      ListEmptyComponent={<EmptyDataComponent />}
      contentContainerStyle={{ paddingTop: 20 }}
      showsVerticalScrollIndicator={false}
      renderItem={renderCard}
    />
  );
};

export { FavoritesList };
