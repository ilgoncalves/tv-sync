import { StateCreator } from 'zustand';
import {
  AuthInitialSlice,
  AuthSlice,
  AuthState,
} from '~/stores/useAuthStore/types';

const initialSlice: AuthInitialSlice = {
  tokens: undefined,
  userId: undefined,
  authEmail: undefined,
};

export const createAuthSlice: StateCreator<AuthState, [], [], AuthSlice> = (
  set,
  get,
) => ({
  ...initialSlice,
  signIn: async () => {},
});
