import { Show } from '../show';

export type GenreShows = Record<string, Show[]>;
export interface IScheduleParams {
  showsByGenre: GenreShows;
}

export interface ISchedule extends IScheduleParams {}
