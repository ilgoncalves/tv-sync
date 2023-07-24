import { FC } from 'react';
import { Div } from 'react-native-magnus';
import { AndroidBlurProps } from './types';
import { ImageBackground, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '~/theme/colors';

const AndroidBlur: FC<AndroidBlurProps> = ({ opacity = 0.6, radius }) => {
  const blurImage = require('~/assets/images/blurred-image1.jpg');
  return (
    <Div position="absolute" rounded={16} bottom={0} left={0} right={0} top={0}>
      <ImageBackground
        style={{ flex: 1 }}
        imageStyle={{
          opacity,
          borderRadius: radius,
        }}
        source={blurImage}>
        <LinearGradient
          style={[styles.gradient, { borderRadius: radius }]}
          colors={[
            colors['background.linearBackgroundDark'],
            colors['background.linearBackgroundLight'],
          ]}
        />
      </ImageBackground>
    </Div>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    zIndex: 10,
    opacity: 0.7,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export { AndroidBlur };
