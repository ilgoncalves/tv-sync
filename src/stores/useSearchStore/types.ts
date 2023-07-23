import { Show } from '~/models';

export interface SearchInitialState {
  searchedShows: Show[];
  searchedQuery?: string;
}

export interface SearchState extends SearchInitialState {
  searchShows: (query: string) => Promise<void>;
}
