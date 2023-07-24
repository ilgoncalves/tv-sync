import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { FavoritesShowsInitialState, FavoritesShowsState } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Show as ShowApi } from '~/services/types';

const initialState: FavoritesShowsInitialState = {
  favoriteShows: [],
};

export const useFavoritesShows = create<FavoritesShowsState>()(
  persist(
    devtools((set, get) => ({
      ...initialState,
      addToFavorites: show => {
        set(state => ({
          favoriteShows: [...state.favoriteShows, show.toRaw() as ShowApi],
        }));
      },
      removeFromFavorites: showId => {
        set(state => ({
          favoriteShows: state.favoriteShows.filter(show => show.id !== showId),
        }));
      },
      setFavoriteShows: shows => {
        set({ favoriteShows: shows });
      },
      clearFavorites: () => {
        set({ favoriteShows: [] });
      },
      isShowFavorite: showId => {
        const state = get();
        return state.favoriteShows.some(show => show.id === showId);
      },
    })),

    {
      name: 'favoriteShows-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
