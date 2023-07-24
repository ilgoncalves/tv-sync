import React, { FC } from 'react';
import { Div, Text } from 'react-native-magnus';
import { GenderListProps } from './types';
import { SeriesImage } from '~/components/atoms/SeriesImage';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Show } from '~/models';
import { EmptyDataComponent } from '~/components/atoms';
import { useShowStore } from '~/stores';

const GenderList: FC<GenderListProps> = ({
  data,
  flatListKey,
  sectionTitle,
}) => {
  const { navigate } = useNavigation();
  const { setDetailLoading } = useShowStore();
  const gap = 12;
  const onPressItem = (item: Show) => {
    setDetailLoading(true);
    navigate('details', {
      screen: '/series-detail',
      params: {
        serieId: item.id.toString(),
      },
    });
  };
  return (
    <Div my={8} justifyContent="center">
      <Text ml={12} mb={8} variant="headline4">
        {sectionTitle}
      </Text>
      <FlatList
        key={flatListKey}
        ListEmptyComponent={<EmptyDataComponent />}
        data={data}
        renderItem={({ item }) => (
          <SeriesImage
            size={150}
            image={item.image?.medium}
            onPress={() => onPressItem(item)}
          />
        )}
        keyExtractor={item => `${item.id}`}
        horizontal={true}
        contentContainerStyle={{ gap, paddingHorizontal: 12 }}
        showsHorizontalScrollIndicator={false}
      />
    </Div>
  );
};

export { GenderList };
