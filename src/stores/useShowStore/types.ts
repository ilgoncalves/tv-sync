import { Show } from '~/models';

export interface ShowStoreInitialState {
  currentDetailedShow: Show | null;
}

export interface ShowStoreState extends ShowStoreInitialState {
  getShowInfo: (showId: string) => Promise<void>;
}
