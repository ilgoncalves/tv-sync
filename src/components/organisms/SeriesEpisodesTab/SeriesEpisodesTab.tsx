import { FC, useEffect, useState } from 'react';
import { Div } from 'react-native-magnus';
import { SeriesEpisodesTabProps } from './types';
import { Episode, SeasonSwitcher } from '~/components/molecules';
import { EpisodesCollapse } from '../EpisodesCollapse';
import { useShowStore } from '~/stores';

const SeriesEpisodesTab: FC<SeriesEpisodesTabProps> = ({}) => {
  const [currentSeason, setCurrentSeason] = useState(1);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const { currentDetailedShow } = useShowStore();

  useEffect(() => {
    if (currentDetailedShow) {
      setEpisodes(currentDetailedShow.getEpisodesUiBySeason(currentSeason));
    }
  }, [currentSeason]);

  return (
    <Div flex={1}>
      <SeasonSwitcher
        totalSeasons={currentDetailedShow?.getSeasonAmount()}
        onSeasonChange={setCurrentSeason}
      />
      <EpisodesCollapse episodes={episodes} />
    </Div>
  );
};

export { SeriesEpisodesTab };
