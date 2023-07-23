import { FC } from 'react';
import { Div } from 'react-native-magnus';
import { SeriesSynopsisTabProps } from './types';
import { CollapsibleText } from '~/components/molecules';
import { CastAndCrew } from '../CastAndCrew';

const SeriesSynopsisTab: FC<SeriesSynopsisTabProps> = ({
  cast,
  director,
  synopsis,
}) => {
  return (
    <Div flex={1}>
      <CollapsibleText numberOfLines={4}>{synopsis}</CollapsibleText>
      <CastAndCrew director={director} cast={cast} />
    </Div>
  );
};

export { SeriesSynopsisTab };
