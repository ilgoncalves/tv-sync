import { Episode } from '../episode';
import { Episode as EpisodeUi } from '~/components/molecules';
import {
  CastMember as PersonInfoUi,
  SerieInfo as ShowInfoUi,
} from '~/components/organisms';
import { Cast } from '../cast';
import { Image, Rating } from '~/services/types';

export interface IShowParams {
  id: number;
  name: string;
  genres: string[];
  status: string;
  runtime?: number;
  premiered?: string;
  rating?: Rating;
  image?: Image;
  summary?: string;
  episodes?: Episode[];
}

export interface IShow extends IShowParams {
  addEpisodes(episodes: Episode[]): void;
  addCast(cast: Cast[]): void;
  getSeasonAmount(): number;
  getEpisodesUiBySeason(currentSeason: number): EpisodeUi[];
  getShowInfoUi(): ShowInfoUi;
  getCast(): PersonInfoUi[];
}
