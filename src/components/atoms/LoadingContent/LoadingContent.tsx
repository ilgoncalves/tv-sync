import { FC } from 'react';
import { Div } from 'react-native-magnus';
import { LoadingContentProps } from './types';
import { ActivityIndicator } from 'react-native';
import { colors } from '~/theme/colors';

const LoadingContent: FC<LoadingContentProps> = ({ ...props }) => {
  return (
    <Div {...props} justifyContent="center" alignItems="center" flex={1}>
      <ActivityIndicator size="large" color={colors['primary.pink']} />
    </Div>
  );
};

export { LoadingContent };
