import { Animated } from 'react-native';
import { SeriesInformationsProps } from '~/components/molecules';
import { OptionsTabNavigatorProps } from '~/components/molecules/OptionsTabNavigator';

export interface SerieDetailHeaderProps {
  serieInfo: Omit<
    SeriesInformationsProps,
    'onToggleFavorite' | 'tabs' | 'animatedValue'
  >;
  tabs: OptionsTabNavigatorProps;
  offset: Animated.Value;
}
