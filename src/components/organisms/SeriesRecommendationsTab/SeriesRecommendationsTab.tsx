import { FC } from 'react';
import { Div } from 'react-native-magnus';
import { SeriesRecommendationsTabProps } from './types';
import { EmptyDataComponent } from '~/components/atoms';

const SeriesRecommendationsTab: FC<SeriesRecommendationsTabProps> = ({}) => {
  return (
    <Div>
      <EmptyDataComponent />
    </Div>
  );
};

export { SeriesRecommendationsTab };
