import React, { FC } from 'react';
import { Div, Text } from 'react-native-magnus';
import { GenderListProps } from './types';
import { SeriesImage } from '~/components/atoms/SeriesImage';
import { FlatList } from 'react-native';

const GenderList: FC<GenderListProps> = ({
  data,
  onItemPress,
  sectionTitle,
}) => {
  const gap = 8;

  return (
    <Div my={16} justifyContent="center">
      <Text ml={12} mb={8} variant="headline4">
        {sectionTitle}
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <SeriesImage image={item.image?.medium} onPress={onItemPress} />
        )}
        horizontal={true}
        contentContainerStyle={{ gap }}
        showsHorizontalScrollIndicator={false}
      />
    </Div>
  );
};

export { GenderList };
