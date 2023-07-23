import { FC } from 'react';
import { Div } from 'react-native-magnus';
import { EpisodesCollapseProps } from './types';
import { EpisodeItem } from '~/components/molecules';
import uuid from 'react-native-uuid';

const EpisodesCollapse: FC<EpisodesCollapseProps> = ({ episodes }) => {
  return (
    <Div>
      {episodes.map((episode, i) => (
        <EpisodeItem
          key={`episode-item${uuid.v4().toString()}`}
          episodeNumber={(i + 1).toString()}
          episodeInfo={episode}
        />
      ))}
    </Div>
  );
};

export { EpisodesCollapse };
