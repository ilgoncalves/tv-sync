import { FC } from 'react';
import { SeriesInformationsProps } from './types';
import { Animated, ImageBackground, StyleSheet } from 'react-native';

import { Div, Text, Image } from 'react-native-magnus';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '~/theme/colors';
import { IconSvg } from '~/components/atoms';
import { OptionsTabNavigator } from '../OptionsTabNavigator';
import { TranslationsKeys } from '~/i18n';
import { useTranslation } from 'react-i18next';

const HEADER_HEIGHT = 220;
const HEADER_MIN_HEIGHT = 36;

const SeriesInformations: FC<SeriesInformationsProps> = ({
  imageUrl,
  title,
  rating,
  minutes,
  genres,
  episodes,
  isFavorite,
  onToggleFavorite,
  tabs,
  animatedValue,
}) => {
  const {
    activeTabKey,
    onTabPress,
    tabs: tabsEntries,
  } = tabs ?? {
    tabs: [],
    onTabPress: () => {},
  };
  const { t } = useTranslation();

  console.log(animatedValue);

  const headerHeight = animatedValue.interpolate({
    inputRange: [10, HEADER_HEIGHT + 10],
    outputRange: [HEADER_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const componentsOpacity = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [1, 0],
  });

  return (
    <Animated.View
      style={{
        height: headerHeight,
        overflow: 'hidden',
      }}>
      <ImageBackground
        source={{ uri: imageUrl }}
        blurRadius={8}
        imageStyle={[
          {
            opacity: 0.18,
          },
        ]}
        style={styles.image}>
        <LinearGradient
          colors={[
            colors.transparent,
            colors.transparent,
            colors['background.linearBackgroundDark'],
          ]}
          style={styles.gradient}
        />

        <Animated.View style={{ flex: 1, opacity: componentsOpacity }}>
          <Div row p="md">
            <Div w="35%" justifyContent="center" alignItems="center">
              <Image
                shadow="md"
                rounded="md"
                w="100%"
                h="100%"
                source={{ uri: imageUrl }}
              />
            </Div>
            <Div w="65%">
              <Div alignItems="flex-end">
                <IconSvg
                  onPress={onToggleFavorite}
                  containerStyle={{
                    borderColor: 'primary.pink',
                    borderWidth: 1,
                    rounded: 'sm',
                    p: 'xs',
                  }}
                  name="star"
                  fill={isFavorite ? 'primary.pink' : 'transparent'}
                  stroke="primary.pink"
                />
              </Div>
              <Div px="lg">
                <Text mb="lg" variant="headline5">
                  {title}
                </Text>
                <Div mb="md" alignItems="center" flexDir="row">
                  <IconSvg name="popcorn" fill="primary.pink" />
                  <Text ml="sm" color="primary.pink" variant="medium">
                    {rating}
                  </Text>
                </Div>
                <Text mb="xs" variant="medium">
                  {minutes} {t(TranslationsKeys.SeriesInformationsMinutes)}
                </Text>
                <Text mb="xs" variant="medium">
                  {genres.join(', ')}
                </Text>
                <Text mb="xs" variant="medium">
                  {episodes} episodes
                </Text>
              </Div>
            </Div>
          </Div>
        </Animated.View>
      </ImageBackground>
      <Div position="absolute" bottom={0}>
        <OptionsTabNavigator
          tabs={tabsEntries}
          activeTabKey={activeTabKey}
          onTabPress={onTabPress}
        />
      </Div>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: HEADER_HEIGHT,
    overflow: 'hidden',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  poster: {
    width: '90%',
    height: '80%',
  },
});

export { SeriesInformations };
