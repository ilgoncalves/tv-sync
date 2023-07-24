import { Person, Show } from '~/models';

type SearchTabScreen = 'serie-list' | 'people-search';
export interface SearchStoreInitialState {
  searchedShows: Show[];
  searchedPeople: Person[];
  searchLoadingPeople: boolean;
  searchLoadingShows: boolean;
  currentTabScreen: SearchTabScreen;
  searchedQuery?: string;
}

export interface SearchStoreState extends SearchStoreInitialState {
  searchShows: (query: string) => Promise<void>;
  searchPeople: (query: string) => Promise<void>;
  setCurrentTabScreen: (currentTab: SearchTabScreen) => void;
  clear: () => void;
}
