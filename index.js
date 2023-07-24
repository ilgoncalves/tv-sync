import 'react-native-reanimated';
import { AppRegistry } from 'react-native';
import './i18n';
import App from './src';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
