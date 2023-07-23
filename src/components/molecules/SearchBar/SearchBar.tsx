import React, { FC } from 'react';
import { Div, Input } from 'react-native-magnus';
import { SearchBarProps } from './types';
import { IconSvg } from '~/components/atoms';

const SearchBar: FC<SearchBarProps> = ({ value, onChangeText }) => {
  return (
    <Div>
      <Input
        placeholder="Search"
        prefix={<IconSvg name="search" stroke="" fill="transparent" />}
        fontSize="headline5"
        color="secondary.textOpaque"
        onChangeText={onChangeText}
        value={value}
      />
    </Div>
  );
};

export { SearchBar };
