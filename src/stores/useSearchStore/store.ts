import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { SearchInitialState, SearchState } from './types';
import { SearchService } from '~/services';
import { Show } from '~/models';

const service = new SearchService();

const initialState: SearchInitialState = {
  searchedShows: [],
};

export const useSearchStore = create<SearchState>()(
  devtools(set => ({
    ...initialState,
    searchShows: async query => {
      try {
        const rawResponse = await service.searchShows(query);

        const shows = rawResponse.map(response =>
          Show.fromApiResponse(response),
        );

        set({ searchedShows: shows, searchedQuery: query });
      } catch (error) {
        console.log('error', error);
      }
    },
  })),
);
