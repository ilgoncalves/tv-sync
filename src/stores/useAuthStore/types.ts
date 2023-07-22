import User from '~/app/domain/User';
import { AppTokens } from '~/app/domain/authentication/interfaces/AppTokens';
import { PersonalData } from '~/app/domain/PersonalData';

export interface AuthInitialSlice {
  tokens?: AppTokens;
  userId?: string;
  authEmail?: string;
}

export interface AuthSlice extends AuthInitialSlice {
  signIn: () => Promise<string>;
}

export interface UserInitialSlice {
  user?: User;
}

export interface UserSlice extends UserInitialSlice {
  savePersonalData: (
    userId: string,
    personalData: PersonalData,
  ) => Promise<void>;
  userAssembleDeviceToggle(): Promise<void>;
  userStorageDeviceToggle(): Promise<void>;
  setUser: (user: User) => void;
  refreshUser: () => Promise<User | null>;
  deleteAccount: () => Promise<void>;
}

export type AuthInitialState = AuthInitialSlice & UserInitialSlice;

export type AuthState = AuthSlice & UserSlice;
