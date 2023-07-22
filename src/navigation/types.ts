import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  'splash-screen': undefined;
  auth: NavigatorScreenParams<AuthStackParamList>;
  tabs: NavigatorScreenParams<HomeTabsParamList> | undefined;
  details: NavigatorScreenParams<DetailsStackParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabScreenProps<T extends keyof HomeTabsParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabsParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type DetailsStackParamList = {
  '/person-detail': { personId: string };
  '/series-detail': { serieId: string };
};

export type AuthStackParamList = {
  '/confirm-password': undefined;
  '/request-email': undefined;
};

export type HomeTabsParamList = {
  '/home': undefined;
  '/search': undefined;
  '/favorites': undefined;
  '/settings': undefined;
};
