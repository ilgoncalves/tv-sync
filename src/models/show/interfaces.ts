import { Episode } from '../episode';
import { Episode as EpisodeUi } from '~/components/molecules';
import {
  CastMember as PersonInfoUi,
  SerieInfo as ShowInfoUi,
} from '~/components/organisms';
import { Cast } from '../cast';
import {
  Crew,
  Image,
  Person as PersonApi,
  Rating,
  Show as ShowApi,
} from '~/services/types';

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

export type MostImportantCrewPerson = {
  person: PersonApi;
  responsibilities: string[];
};

export interface IShow extends IShowParams {
  addEpisodes(episodes: Episode[]): void;
  addCast(cast: Cast[]): void;
  addCrew(crew: Crew[]): void;
  getSeasonAmount(): number;
  getMostImportantCrewPerson(): MostImportantCrewPerson | undefined;
  toRaw(): Partial<ShowApi>;
  getEpisodesUiBySeason(currentSeason: number): EpisodeUi[];
  getShowInfoUi(): ShowInfoUi;
  getCast(): PersonInfoUi[];
}
