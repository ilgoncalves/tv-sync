import { Animated } from 'react-native';
import { OptionsTabNavigatorProps } from '../OptionsTabNavigator';

export interface SeriesInformationsProps {
  imageUrl: string;
  title: string;
  rating: string;
  minutes: number;
  genres: string[];
  episodes: number;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  tabs: OptionsTabNavigatorProps;
  animatedValue: Animated.Value;
}
