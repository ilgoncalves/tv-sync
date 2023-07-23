import React, { FC } from 'react';
import { Image } from 'react-native-magnus';
import { SeriesImageProps } from './types';
import { TouchableOpacity } from 'react-native';

const HEIGHT_RATIO = 1.4;
const SeriesImage: FC<SeriesImageProps> = ({ onPress, size, image }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <Image
        source={{
          uri: image,
        }}
        h={(size ?? 0) * HEIGHT_RATIO}
        w={size}
        rounded="lg"
      />
    </TouchableOpacity>
  );
};

export { SeriesImage };
