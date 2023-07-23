import React, { FC } from 'react';
import { Div, Image, Text } from 'react-native-magnus';
import { PersonCardProps } from './types';
import { IconSvg } from '~/components/atoms';
import { TouchableOpacity } from 'react-native';

const PersonCard: FC<PersonCardProps> = ({ name, image, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Div
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb={12}
        borderBottomWidth={0.3}
        borderBottomColor={'secondary.pinkLight'}>
        <Div h={60} flexDir="row" alignItems="center">
          <Image w={40} h={40} borderRadius={20} source={{ uri: image }} />
          <Text variant="formLabel" fontSize={'large'} mx={12}>
            {name}
          </Text>
        </Div>
        <IconSvg name="chevronRight" stroke="secondary.textOpaque" />
      </Div>
    </TouchableOpacity>
  );
};

export { PersonCard };
