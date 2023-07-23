import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { Div, DivProps, Text, TextProps, useTheme } from 'react-native-magnus';
import { SvgProps } from 'react-native-svg';
import { IColors } from '~/theme/types';

import { Icons } from '~/assets/svgs';

export type IconName = keyof typeof Icons;

export interface IconSvgProps extends SvgProps {
  name: IconName;
  containerStyle?: DivProps;
  textStyle?: TextProps;
  size?: number;
  label?: string;
  color?: IColors | (string & {});
  fill?: IColors | (string & {});
  stroke?: IColors | (string & {});
  onPress?: (e?: GestureResponderEvent) => void;
}

const IconSvg = ({
  name,
  size = 8,
  containerStyle,
  textStyle,
  onPress,
  label,
  color,
  fill = 'transparent',
  stroke,
  ...props
}: IconSvgProps) => {
  const SvgComponent = Icons[name];
  const { theme } = useTheme();

  color = color ? theme?.colors?.[color] ?? color : color;
  fill = fill ? theme?.colors?.[fill] ?? fill : fill;
  stroke = stroke ? theme?.colors?.[stroke] ?? stroke : stroke;

  // @ts-ignore
  const { width, height } = SvgComponent({})?.props;

  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <Div alignItems="center" {...containerStyle}>
        <SvgComponent
          width={width * (size / 10)}
          height={height * (size / 10)}
          {...props}
          color={color}
          stroke={stroke}
          fill={fill}
        />
        {label && (
          <Text mt={4} {...textStyle}>
            {label}
          </Text>
        )}
      </Div>
    </TouchableOpacity>
  );
};

export { IconSvg };
