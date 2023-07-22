import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import HomeTabsRoutes from './home.tabs';
import { RootStackParamList } from './types';
import { SplashScreen } from '~/screens';
import AuthStackRoutes from './auth.stack';
import DetailsStackRoutes from './details.stack';

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="tabs">
      <Stack.Screen
        name="splash-screen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="auth" component={AuthStackRoutes} />
      <Stack.Screen name="tabs" component={HomeTabsRoutes} />
      <Stack.Screen name="details" component={DetailsStackRoutes} />
    </Stack.Navigator>
  );
};
export default Navigation;
