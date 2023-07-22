import React, { FC } from 'react';
import { Div } from 'react-native-magnus';
import { SerieDetailHeaderProps } from './types';
import { SeriesInformations } from '~/components/molecules';

const SerieDetailHeader: FC<SerieDetailHeaderProps> = ({
  serieInfo,
  tabs,
  offset,
}) => {
  return (
    <Div>
      <SeriesInformations
        tabs={tabs}
        animatedValue={offset}
        imageUrl={serieInfo.imageUrl}
        title={serieInfo.title}
        rating={serieInfo.rating}
        minutes={serieInfo.minutes}
        genres={serieInfo.genres}
        episodes={serieInfo.episodes}
        isFavorite={serieInfo.isFavorite}
        onToggleFavorite={() => {}}
      />
    </Div>
  );
};

export { SerieDetailHeader };
