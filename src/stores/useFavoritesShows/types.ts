import { Show } from '~/models';
import { Show as ShowApi } from '~/services/types';

export interface FavoritesShowsInitialState {
  favoriteShows: ShowApi[];
}

export interface FavoritesShowsState extends FavoritesShowsInitialState {
  addToFavorites: (show: Show) => void;
  removeFromFavorites: (showId: number) => void;
  isShowFavorite: (showId: number) => boolean;
  setFavoriteShows: (shows: ShowApi[]) => void;
  clearFavorites: () => void;
}
