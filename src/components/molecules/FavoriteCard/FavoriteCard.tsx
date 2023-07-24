import React, { FC } from 'react';
import { Div, Image, Text } from 'react-native-magnus';
import { FavoriteCardProps } from './types';
import { IconSvg } from '~/components/atoms';
import { TouchableOpacity } from 'react-native';
import { imageSource } from '~/utils/helpers/imageSource';

const FavoriteCard: FC<FavoriteCardProps> = ({
  serieName,
  onPress,
  image,
  onStarPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Div
        h={86}
        flexDir="row"
        rounded="md"
        px={16}
        my={8}
        justifyContent="space-between"
        bg="variants.cardBackground">
        <Image
          w={60}
          h={60}
          borderWidth={1}
          rounded="md"
          borderColor="primary.pink"
          source={imageSource(image)}
          mr={20}
          alignSelf="center"
        />
        <Div flex={1} pt={16} pr={12}>
          <Text numberOfLines={2} variant="headline5">
            {serieName}
          </Text>
        </Div>
        <Div pt={16}>
          <IconSvg
            onPress={onStarPress}
            size={12}
            name="star"
            fill="primary.pink"
            stroke="primary.pink"
          />
        </Div>
      </Div>
    </TouchableOpacity>
  );
};

export { FavoriteCard };
