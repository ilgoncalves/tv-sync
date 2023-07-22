import { ThemeType } from 'react-native-magnus';

export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export const fontFamily: Required<ThemeType['fontFamily']> = {
  normal: 'OpenSans-Regular',
  bold: 'OpenSans-Bold',
  100: 'OpenSans-Light',
  200: 'OpenSans-Light',
  300: 'OpenSans-Light',
  400: 'OpenSans-Regular',
  500: 'OpenSans-Medium',
  600: 'OpenSans-SemiBold',
  700: 'OpenSans-Bold',
  800: 'OpenSans-ExtraBold',
  900: 'OpenSans-ExtraBold',
};
