import React, { FC } from 'react';
import { Div, Text } from 'react-native-magnus';
import { SettingsOptionProps } from './types';
import { TouchableOpacity } from 'react-native';
import { IconSvg } from '~/components/atoms';

const SettingsOption: FC<SettingsOptionProps> = ({
  onPress,
  text,
  iconName,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Div
        mb={20}
        borderBottomWidth={1}
        borderBottomColor="background.linearBackgroundLight"
        flexDir="row"
        alignItems="center"
        py="md"
        mx="lg">
        <IconSvg size={12} name={iconName} />
        <Text ml="lg" variant="headline5">
          {text}
        </Text>
      </Div>
    </TouchableOpacity>
  );
};

export { SettingsOption };
