import { FC } from 'react';
import { Div } from 'react-native-magnus';
import { SeriesEpisodesTabProps } from './types';

const SeriesEpisodesTab: FC<SeriesEpisodesTabProps> = ({}) => {
  return <Div flex={1} bg="primary.blue"></Div>;
};

export { SeriesEpisodesTab };
