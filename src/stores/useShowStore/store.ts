import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ShowStoreInitialState, ShowStoreState } from './types';

import { ShowService } from '~/services';
import { Episode, Show } from '~/models';

const service = new ShowService();

const initialState: ShowStoreInitialState = {
  currentDetailedShow: null,
};

export const useShowStore = create<ShowStoreState>()(
  devtools(set => ({
    ...initialState,
    getShowInfo: async showId => {
      set({ currentDetailedShow: null });
      const rawEpisodes = await service.getEpisodeList(showId);

      const rawShow = await service.getShowInformation(showId);
      const rawCast = await service.getShowCast(showId);

      const show = Show.fromApiResponse(rawShow);

      const showEpisodes = rawEpisodes.map(episode =>
        Episode.fromApiResponse(episode),
      );

      show.addEpisodes(showEpisodes);

      set({ currentDetailedShow: show });
    },
  })),
);
