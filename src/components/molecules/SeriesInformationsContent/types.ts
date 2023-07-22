export interface SeriesInformationsContentProps {
  imageUrl: string;
  title: string;
  rating: string;
  minutes: number;
  genres: string[];
  episodes: number;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}
