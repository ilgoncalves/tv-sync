import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { SearchStoreInitialState, SearchStoreState } from './types';
import { SearchService } from '~/services';
import { Person, Show } from '~/models';

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
        const rawPeopleResponse = await service.searchPeople(query);

        const people = rawPeopleResponse.map(el =>
          Person.fromApiResponse(el.person),
        );

        set({ searchedPeople: people });
      } catch (error) {
        console.log('searchPeople error', error);
      }
    },
    setCurrentTabScreen: currentTab => {
      set({ currentTabScreen: currentTab });
    },
    clear: () => {
      set({ searchedQuery: undefined, searchedPeople: [], searchedShows: [] });
    },
  })),
);
