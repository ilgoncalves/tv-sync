import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { AuthState } from '~/stores/useAuthStore/types';
import { createAuthSlice } from '~/stores/useAuthStore/slices/auth.slice';
import { createUserSlice } from '~/stores/useAuthStore/slices/user.slice';

export const useAuthStore = create<AuthState>()(
  devtools((...a) => ({
    ...createAuthSlice(...a),
    ...createUserSlice(...a),
  })),
);
