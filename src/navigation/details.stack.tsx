import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { DetailsStackParamList } from './types';
import { PersonDetail, SeriesDetails } from '~/screens';

const DetailsStack = createNativeStackNavigator<DetailsStackParamList>();

export type DetailsStackNavigationProp =
  NativeStackNavigationProp<DetailsStackParamList>;

const DetailsStackRoutes = () => {
  return (
    <DetailsStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        presentation: 'card',
        gestureEnabled: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <DetailsStack.Screen name="/person-detail" component={PersonDetail} />
      <DetailsStack.Screen name="/series-detail" component={SeriesDetails} />
    </DetailsStack.Navigator>
  );
};

export default DetailsStackRoutes;
