import { Show } from '~/models';
import { GenreShows } from '~/models/schedule';

export interface ShowStoreInitialState {
  currentDetailedShow: Show | null;
  homeShows: GenreShows;
}

export interface ShowStoreState extends ShowStoreInitialState {
  getShowInfo: (showId: string) => Promise<void>;
  getAllShows: () => Promise<void>;
}
