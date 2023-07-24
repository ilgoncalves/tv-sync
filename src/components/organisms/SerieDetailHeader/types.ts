import { Animated } from 'react-native';
import {
  OptionsTabNavigatorProps,
  SeriesInformationsContentProps,
} from '~/components/molecules';

export type SerieInfo = Omit<
  SeriesInformationsContentProps,
  'onToggleFavorite'
>;
export interface SerieDetailHeaderProps {
  serieInfo: SerieInfo;
  tabs: OptionsTabNavigatorProps;
  offset: Animated.Value;
  onFavoritePress: () => void;
}
