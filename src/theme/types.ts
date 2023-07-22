import { colors, Leaves } from './colors';
import { IButtonVariants } from './components/Button';
import { Text } from './components/Text';
import { fontSize } from './fontSize';

type IFontSize = keyof typeof fontSize;
export type IColors = Leaves<typeof colors>;
export type ITextVariants = keyof (typeof Text)['variants'];

declare module 'react-native-magnus' {
  interface TextProps {
    fontSize?: IFontSize;
    color?: IColors;
    bg?: IColors;
    variant?: ITextVariants;
  }
  interface DivProps {
    borderColor?: IColors;
    bg?: IColors;
  }
  interface IconProps {
    color?: IColors;
    fontSize?: IFontSize;
    borderColor?: IColors;
    bg?: IColors;
  }
  interface ButtonProps {
    color?: IColors;
    fontSize?: IFontSize;
    borderColor?: IColors;
    bg?: IColors;
    variant?: IButtonVariants;
  }
  interface InputProps {
    color?: IColors;
    borderColor?: IColors;
    bg?: IColors;
    fontSize?: IFontSize;
  }
}
