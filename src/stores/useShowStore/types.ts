import { Show } from '~/models';
import { GenreShows } from '~/models/schedule';

export interface ShowStoreInitialState {
  currentDetailedShow: Show | null;
  homeShows: GenreShows;
  originalHomeShows: GenreShows;
}

export interface ShowStoreState extends ShowStoreInitialState {
  getShowInfo: (showId: string) => Promise<void>;
  getAllShows: () => Promise<void>;
  searchHomeShow: (query: string) => void;
}
