import { FC } from 'react';
import { Div, Text } from 'react-native-magnus';
import { EmptyDataComponentProps } from './types';

const EmptyDataComponent: FC<EmptyDataComponentProps> = ({ message }) => {
  return (
    <Div flex={1} justifyContent="center" alignItems="center">
      <Text variant="headline5" color="secondary.textOpaque">
        {message}
      </Text>
    </Div>
  );
};

export { EmptyDataComponent };
