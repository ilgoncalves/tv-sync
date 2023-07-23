export interface Episode {
  title: string;
  duration: string;
  season: number;
  description: string;
  images: string[];
}

export interface EpisodeBodyProps {
  episode: Episode;
}
