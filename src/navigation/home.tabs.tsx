import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { HomeTabsParamList } from './types';

import { Tab } from './tab';
import { Favorites, Home, Search, Settings } from '~/screens';
import { CustomBottomBar } from '~/components/organisms';

const HomeTabs = createBottomTabNavigator<HomeTabsParamList>();

const HomeTabsRoutes = () => {
  const isAndroid = Platform.OS === 'android';

  const iconsSize = isAndroid ? 9 : 10;

  return (
    <HomeTabs.Navigator
      tabBar={props => <CustomBottomBar {...props} />}
      initialRouteName="/home">
      <HomeTabs.Screen
        name="/home"
        component={Home}
        options={() => ({
          headerShown: false,
          ...Tab({
            icon: 'home',
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
            icon: 'star',
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
            icon: 'settings',
            size: iconsSize,
          }),
        })}
      />
    </HomeTabs.Navigator>
  );
};

export default HomeTabsRoutes;
