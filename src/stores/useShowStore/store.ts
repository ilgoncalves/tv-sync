import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ShowStoreInitialState, ShowStoreState } from './types';

import { ScheduleService, ShowService } from '~/services';
import { Episode, Show } from '~/models';
import { Cast } from '~/models/cast';
import { Schedule } from '~/models/schedule';

const service = new ShowService();
const scheduleService = new ScheduleService();

const initialState: ShowStoreInitialState = {
  currentDetailedShow: null,
  homeShows: {},
  originalHomeShows: {},
};

export const useShowStore = create<ShowStoreState>()(
  devtools(set => ({
    ...initialState,
    getShowInfo: async showId => {
      try {
        set({ currentDetailedShow: null });

        const [rawEpisodes, rawShow, rawCast] = await Promise.all([
          service.getEpisodeList(showId),
          service.getShowInformation(showId),
          service.getShowCast(showId),
        ]);

        const show = Show.fromApiResponse(rawShow);

        const showEpisodes = rawEpisodes.map(episode =>
          Episode.fromApiResponse(episode),
        );

        const showCast = rawCast.map(cast => Cast.fromApiResponse(cast));

        show.addEpisodes(showEpisodes);
        show.addCast(showCast);

        set({ currentDetailedShow: show });
      } catch (error) {
        console.log('Error occurred:', error);
      }
    },
    getAllShows: async () => {
      try {
        const rawFullSchedule = await scheduleService.getFullSchedule();
        const schedules = Schedule.fromApiResponse(rawFullSchedule);

        set({
          homeShows: schedules.showsByGenre,
          originalHomeShows: schedules.showsByGenre,
        });
      } catch (error) {}
    },
    searchHomeShow: async query => {
      set(state => {
        if (query.length === 0) {
          // If no query, reset to the original shows
          return { homeShows: state.originalHomeShows };
        }

        const filteredShowsByGenre: Record<string, Show[]> = {};

        Object.keys(state.homeShows).forEach(genre => {
          filteredShowsByGenre[genre] = state.homeShows[genre].filter(show =>
            show.name.toLowerCase().includes(query.toLowerCase()),
          );
        });

        return { homeShows: filteredShowsByGenre };
      });
    },
  })),
);
