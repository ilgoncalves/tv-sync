import { Show } from '~/models';
import { GenreShows } from '~/models/schedule';

export interface ShowStoreInitialState {
  currentDetailedShow: Show | null;
  homeShows: GenreShows;
  originalHomeShows: GenreShows;
  homeLoading: boolean;
  detailScreenLoading: boolean;
}

export interface ShowStoreState extends ShowStoreInitialState {
  getShowInfo: (showId: string) => Promise<void>;
  getAllShows: () => Promise<void>;
  searchHomeShow: (query: string) => void;
  setDetailLoading: (loadingState: boolean) => void;
}
