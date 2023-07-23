import { Episode } from '../episode';
import { Episode as EpisodeUi } from '~/components/molecules';
import {
  CastMember as PersonInfoUi,
  SerieInfo as ShowInfoUi,
} from '~/components/organisms';

export interface IRating {
  average?: number;
}

export interface IImage {
  medium: string;
  original: string;
}

export interface IShowParams {
  id: number;
  name: string;
  genres: string[];
  status: string;
  runtime?: number;
  premiered?: string;
  rating?: IRating;
  image?: IImage;
  summary?: string;
  episodes?: Episode[];
}

export interface IShow extends IShowParams {
  addEpisodes: (episodes: Episode[]) => void;
  getSeasonAmount: () => number;
  getEpisodesUiBySeason: (currentSeason: number) => EpisodeUi[];
  getShowInfoUi: () => ShowInfoUi;
  getCast: () => PersonInfoUi[];
}
