import { ScheduleEpisode } from '~/services/types';
import { GenreShows, ISchedule, IScheduleParams } from './interfaces';
import { Show } from '../show';
import { Episode } from '../episode';

export class Schedule implements ISchedule {
  private _showsByGenre: GenreShows;

  private constructor({ showsByGenre }: IScheduleParams) {
    this._showsByGenre = showsByGenre;
  }

  get showsByGenre() {
    return this._showsByGenre;
  }

  static fromApiResponse(apiResponse: ScheduleEpisode[]): Schedule {
    const showsById: Record<number, Show> = {};

    apiResponse.forEach(episode => {
      const showId = episode._embedded.show.id;
      if (!showsById[showId]) {
        showsById[showId] = Show.fromApiResponse(episode._embedded.show);
      }
      const currentEpisodes = showsById[showId].episodes ?? [];
      showsById[showId].addEpisodes([
        ...currentEpisodes,
        Episode.fromApiResponse(episode),
      ]);
    });

    const showsByGenre: Record<string, Show[]> = {};

    Object.values(showsById).forEach(show => {
      const genre = show.genres[0];
      if (genre) {
        if (!showsByGenre[genre]) {
          showsByGenre[genre] = [];
        }
        showsByGenre[genre].push(show);
      }
    });

    const sortedShowsByGenre: Record<string, Show[]> = {};
    Object.keys(showsByGenre)
      .sort((a, b) => showsByGenre[b].length - showsByGenre[a].length)
      .forEach(key => {
        sortedShowsByGenre[key] = showsByGenre[key];
      });

    return new Schedule({ showsByGenre });
  }
}

export default Schedule;
