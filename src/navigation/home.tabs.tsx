import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { HomeTabsParamList } from './types';

import { Tab } from './tab';
import { Favorites, Home, Search, Settings } from '~/screens';

const HomeTabs = createBottomTabNavigator<HomeTabsParamList>();

const HomeTabsRoutes = () => {
  const isAndroid = Platform.OS === 'android';

  const screenOptions: BottomTabNavigationOptions = {
    tabBarStyle: {
      height: 85,
      paddingBottom: 20,
      paddingTop: isAndroid ? 10 : 5,
      backgroundColor: colors['variants.darkNavy'],
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    unmountOnBlur: true,
  };

  const iconsSize = isAndroid ? 9 : 10;

  return (
    <HomeTabs.Navigator initialRouteName="/home" screenOptions={screenOptions}>
      <HomeTabs.Screen
        name="/home"
        component={Home}
        options={() => ({
          headerShown: false,
          ...Tab({
            icon: 'list',
            size: iconsSize,
          }),
        })}
      />
      <HomeTabs.Screen
        name="/search"
        component={Search}
        options={() => ({
          headerShown: false,
          ...Tab({
            icon: 'list',
            size: iconsSize,
          }),
        })}
      />
      <HomeTabs.Screen
        name="/favorites"
        component={Favorites}
        options={() => ({
          headerShown: false,
          ...Tab({
            icon: 'list',
            size: iconsSize,
          }),
        })}
      />
      <HomeTabs.Screen
        name="/settings"
        component={Settings}
        options={() => ({
          headerShown: false,
          ...Tab({
            icon: 'list',
            size: iconsSize,
          }),
        })}
      />
    </HomeTabs.Navigator>
  );
};

export default HomeTabsRoutes;
