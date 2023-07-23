import React, { FC } from 'react';
import { Image } from 'react-native-magnus';
import { SeriesImageProps } from './types';
import { TouchableOpacity } from 'react-native';

const SeriesImage: FC<SeriesImageProps> = ({ onPress, image }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <Image
        source={{
          uri: image,
        }}
        h={180}
        w={136}
        rounded="lg"
      />
    </TouchableOpacity>
  );
};

export { SeriesImage };
