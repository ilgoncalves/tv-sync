import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { PersonStoreInitialState, PersonStoreState } from './types';

const initialState: PersonStoreInitialState = {};

export const useSearchStore = create<PersonStoreState>()(
  devtools(set => ({
    ...initialState,
  })),
);
