import { StateCreator } from 'zustand';
import { PersonalData } from '~/app/domain/PersonalData';
import User from '~/app/domain/User';
import { UserService } from '~/app/services/user.service';
import {
  AuthState,
  UserInitialSlice,
  UserSlice,
} from '~/stores/useAuthStore/types';

const initialSlice: UserInitialSlice = {
  user: undefined,
};

export const createUserSlice: StateCreator<AuthState, [], [], UserSlice> = (
  set,
  get,
) => ({
  ...initialSlice,
  savePersonalData: async (userId: string, personalData: PersonalData) => {
    const user = await UserService.savePersonalData(userId, personalData);
    set({ user });
  },
  userAssembleDeviceToggle: async () => {
    const { user } = get();
    await UserService.userAssembleDeviceToggle(user!);
    set({ user });
  },
  userStorageDeviceToggle: async () => {
    const { user } = get();
    await UserService.userStorageDeviceToggle(user!);
    set({ user });
  },
  setUser: (user: User) => {
    set({ user });
  },
  refreshUser: async () => {
    const id = get().userId;
    if (!id) {
      return null;
    }
    const userData = await UserService.getUserByKey(id);
    if (userData) {
      set({ user: userData });
    }
    return userData;
  },
  deleteAccount: async () => {
    const id = get().userId;

    if (id) {
      await UserService.deleteAccount(id);
    }
  },
});
