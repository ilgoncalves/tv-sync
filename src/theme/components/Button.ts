import { ButtonProps as ButtonMagnusProps } from 'react-native-magnus';
import { fontFamily } from '../fontFamily';
import { FontSize } from '../fontSize';

export type IButtonVariants = 'solid' | 'outline';

export interface IButtonProps extends ButtonMagnusProps {
  variants?: { [key in IButtonVariants]: ButtonMagnusProps };
}

const buttonSizes = {
  w: '100%',
  h: 46,
  p: 0,
  rounded: 20,
};

const buttonFont = {
  fontSize: 'headline3' as FontSize,
  fontFamily: fontFamily?.[400],
};

export const Button: IButtonProps = {
  variants: {
    solid: {
      bg: 'primary.pink',
      color: 'secondary.textLight',
      alignSelf: 'center',
      ...buttonFont,
      ...buttonSizes,
    },
    outline: {
      bg: 'transparent',
      alignSelf: 'center',
      color: 'secondary.textLight',
      borderColor: 'primary.pink',
      borderWidth: 3,
      ...buttonFont,
      ...buttonSizes,
    },
  },
};
