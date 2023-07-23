import { EpisodeLinks, Image, Rating } from '~/services/types';

export interface IEpisodeParams {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: Rating;
  image: Image;
  summary: string;
  _links: EpisodeLinks;
}

export interface IEpisode extends IEpisodeParams {}
