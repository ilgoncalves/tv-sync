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
      show.genres.forEach(genre => {
        if (!showsByGenre[genre]) {
          showsByGenre[genre] = [];
        }
        showsByGenre[genre].push(show);
      });
    });

    return new Schedule({ showsByGenre });
  }
}

export default Schedule;
