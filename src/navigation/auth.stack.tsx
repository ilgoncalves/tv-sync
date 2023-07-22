import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';
import { ConfirmPassword, RequestEmail } from '~/screens';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export type AuthStackNavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;

const AuthStackRoutes = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        presentation: 'card',
        gestureEnabled: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <AuthStack.Screen name="/request-email" component={RequestEmail} />
      <AuthStack.Screen name="/confirm-password" component={ConfirmPassword} />
    </AuthStack.Navigator>
  );
};

export default AuthStackRoutes;
