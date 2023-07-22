import { Platform } from 'react-native';
import { TextProps } from 'react-native-magnus';
import { fontFamily, FontWeight } from '../fontFamily';
import { FontSize } from '../fontSize';

export interface Text extends TextProps {
  variants: { [key in FontSize]: TextProps };
}

// This function is necessary to fix an issue the fontfamily
// from magnus is doesn't working on iOS
// https://github.com/jsartisan/react-native-magnus/issues/83
export const getFontWeight = (weight: FontWeight): TextProps | undefined => {
  if (!fontFamily) {
    return {};
  }
  return Platform.select<TextProps>({
    ios: {
      fontFamily: fontFamily[weight],
    },
    android: {
      fontWeight: weight,
    },
  });
};

export const Text: Text = {
  color: 'secondary.pinkLight',
  allowFontScaling: false,
  ...getFontWeight('400'),
  variants: {
    headline1: {
      fontSize: 'headline1',
    },
    headline2: {
      fontSize: 'headline2',
    },
    headline3: {
      fontSize: 'headline3',
      ...getFontWeight('bold'),
    },
    headline4: {
      fontSize: 'headline4',
    },
    headline5: {
      fontSize: 'headline5',
      ...getFontWeight('bold'),
    },
    large: {
      fontSize: 'large',
    },
    medium: {
      fontSize: 'medium',
      letterSpacing: 0.32,
    },
    small: {
      fontSize: 'small',
      letterSpacing: 0.27,
    },
    formActive: {
      fontSize: 'formActive',
      ...getFontWeight('bold'),
      letterSpacing: -0.67,
    },
    formDefault: {
      fontSize: 'formDefault',
      letterSpacing: 0.36,
    },
    formLabel: {
      fontSize: 'formLabel',
      letterSpacing: 0.36,
      ...getFontWeight('bold'),
    },
  },
};
