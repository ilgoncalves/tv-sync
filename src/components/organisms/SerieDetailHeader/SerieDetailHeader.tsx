import React, { FC } from 'react';
import { Div } from 'react-native-magnus';
import { SerieDetailHeaderProps } from './types';

import { Animated, ImageBackground, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '~/theme/colors';
import {
  OptionsTabNavigator,
  SeriesInformationsContent,
} from '~/components/molecules';

const HEADER_HEIGHT = 220;
const HEADER_MIN_HEIGHT = 36;

const SerieDetailHeader: FC<SerieDetailHeaderProps> = ({
  serieInfo,
  tabs,
  offset,
  onFavoritePress,
}) => {
  const headerHeight = offset.interpolate({
    inputRange: [10, HEADER_HEIGHT + 10],
    outputRange: [HEADER_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const componentsOpacity = offset.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [1, 0],
  });

  const {
    activeTabKey,
    onTabPress,
    tabs: tabsEntries,
  } = tabs ?? {
    tabs: [],
    onTabPress: () => {},
  };

  return (
    <Div>
      <Animated.View
        style={{
          height: headerHeight,
          overflow: 'hidden',
        }}>
        <ImageBackground
          source={{ uri: serieInfo?.imageUrl }}
          blurRadius={2.2}
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
            <SeriesInformationsContent
              imageUrl={serieInfo?.imageUrl}
              title={serieInfo?.title}
              rating={serieInfo?.rating}
              minutes={serieInfo?.minutes}
              genres={serieInfo?.genres}
              episodes={serieInfo?.episodes}
              isFavorite={serieInfo?.isFavorite}
              onToggleFavorite={onFavoritePress}
            />
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
    </Div>
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

export { SerieDetailHeader };
