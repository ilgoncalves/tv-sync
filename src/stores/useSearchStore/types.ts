import { Show } from '~/models';

export interface SearchStoreInitialState {
  searchedShows: Show[];
  searchedQuery?: string;
}

export interface SearchStoreState extends SearchStoreInitialState {
  searchShows: (query: string) => Promise<void>;
}
