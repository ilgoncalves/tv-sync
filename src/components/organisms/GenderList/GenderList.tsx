import React, { FC } from 'react';
import { Div, Text } from 'react-native-magnus';
import { GenderListProps } from './types';
import { SeriesImage } from '~/components/atoms/SeriesImage';
import { FlatList } from 'react-native';

const GenderList: FC<GenderListProps> = ({
  data,
  flatListKey,
  sectionTitle,
}) => {
  const gap = 8;

  console.log(data);

  return (
    <Div my={8} justifyContent="center">
      <Text ml={12} mb={8} variant="headline4">
        {sectionTitle}
      </Text>
      <FlatList
        key={flatListKey}
        data={data}
        renderItem={({ item }) => (
          <SeriesImage
            size={150}
            image={item.image?.medium}
            onPress={() => {}}
          />
        )}
        keyExtractor={item => `${item.id}`}
        horizontal={true}
        contentContainerStyle={{ gap }}
        showsHorizontalScrollIndicator={false}
      />
    </Div>
  );
};

export { GenderList };
