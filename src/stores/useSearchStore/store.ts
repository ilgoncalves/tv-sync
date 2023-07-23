import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { SearchStoreInitialState, SearchStoreState } from './types';
import { SearchService } from '~/services';
import { Show } from '~/models';

const service = new SearchService();

const initialState: SearchStoreInitialState = {
  searchedShows: [],
  searchedPeople: [],
  currentTabScreen: 'serie-list',
};

export const useSearchStore = create<SearchStoreState>()(
  devtools(set => ({
    ...initialState,
    searchShows: async query => {
      try {
        const rawResponse = await service.searchShows(query);

        const shows = rawResponse.map(response =>
          Show.fromApiResponse(response.show),
        );

        set({ searchedShows: shows, searchedQuery: query });
      } catch (error) {
        console.log('error', error);
      }
    },
    searchPeople: async query => {
      try {
      } catch (error) {}
    },
    setCurrentTabScreen: currentTab => {
      set({ currentTabScreen: currentTab });
    },
    clear: () => {
      set({ searchedQuery: undefined, searchedPeople: [], searchedShows: [] });
    },
  })),
);
