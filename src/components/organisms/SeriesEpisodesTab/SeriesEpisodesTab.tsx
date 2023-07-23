import { FC, useState } from 'react';
import { Div } from 'react-native-magnus';
import { SeriesEpisodesTabProps } from './types';
import { SeasonSwitcher } from '~/components/molecules';
import { EpisodesCollapse } from '../EpisodesCollapse';

const SeriesEpisodesTab: FC<SeriesEpisodesTabProps> = ({ episodes }) => {
  const [currentSeason, setCurrentSeason] = useState(1);

  return (
    <Div flex={1}>
      <SeasonSwitcher totalSeasons={5} onSeasonChange={setCurrentSeason} />
      <EpisodesCollapse episodes={episodes} />
    </Div>
  );
};

export { SeriesEpisodesTab };
