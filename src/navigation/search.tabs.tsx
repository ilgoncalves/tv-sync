import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PeopleSearch } from '~/screens/PeopleSearch';
import { SeriesList } from '~/screens/SeriesList';
import { colors } from '~/theme/colors';
import { fontFamily } from '~/theme/fontFamily';

const Tab = createMaterialTopTabNavigator();

export const SearchTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: 'transparent' },
        tabBarActiveTintColor: colors['primary.pink'],
        tabBarIndicatorStyle: { backgroundColor: colors['primary.pink'] },
        tabBarLabelStyle: {
          fontFamily: fontFamily && fontFamily['700'],
          textTransform: 'none',
          fontSize: 16,
        },
        swipeEnabled: false,
      }}
      sceneContainerStyle={{ backgroundColor: 'transparent' }}
      style={{ backgroundColor: 'transparent' }}>
      <Tab.Screen name="Series List" component={SeriesList} />
      <Tab.Screen name="People Search" component={PeopleSearch} />
    </Tab.Navigator>
  );
};
