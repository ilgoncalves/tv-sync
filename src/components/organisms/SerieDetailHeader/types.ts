import { Animated } from 'react-native';
import {
  OptionsTabNavigatorProps,
  SeriesInformationsContentProps,
} from '~/components/molecules';

export interface SerieDetailHeaderProps {
  serieInfo: Omit<SeriesInformationsContentProps, 'onToggleFavorite'>;
  tabs: OptionsTabNavigatorProps;
  offset: Animated.Value;
}
