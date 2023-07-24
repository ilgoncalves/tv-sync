import React, { FC } from 'react';
import { Div, Image, Text } from 'react-native-magnus';
import { SeriesCardProps } from './types';
import { IconSvg } from '~/components/atoms';
import { TouchableOpacity } from 'react-native';
import { imageSource } from '~/utils/helpers/imageSource';

const SeriesCard: FC<SeriesCardProps> = ({ image, title, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <Div
        my={8}
        h={82}
        bg="variants.cardBackground"
        rounded="xl"
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        px="lg">
        <Div flex={1} flexDir="row">
          <Image
            source={imageSource(image)}
            h={60}
            w={60}
            pl={20}
            rounded="sm"
          />
          <Text numberOfLines={2} flex={1} ml="xl" variant="headline5">
            {title}
          </Text>
        </Div>

        <IconSvg
          size={14}
          fill="transparent"
          name="chevronRight"
          stroke="secondary.textOpaque"
        />
      </Div>
    </TouchableOpacity>
  );
};

export { SeriesCard };
