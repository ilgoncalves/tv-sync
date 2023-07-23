import { Show as ShowApi } from '~/services/types';
import { IImage, IRating, IShow, IShowParams } from './interfaces';
import { Episode } from '../episode';
import {
  CastMember as PersonInfoUi,
  SerieInfo as ShowInfoUi,
} from '~/components/organisms';
import { Episode as EpisodeUi } from '~/components/molecules';

export class Show implements IShow {
  private _id: number;
  private _name: string;
  private _genres: string[];
  private _status: string;
  private _runtime?: number;
  private _premiered?: string;
  private _rating?: IRating;
  private _image?: IImage;
  private _summary?: string;

  private _episodes?: Episode[];

  private constructor({
    id,
    name,
    genres,
    status,
    runtime,
    premiered,
    rating,
    image,
    summary,
    episodes,
  }: IShowParams) {
    this._id = id;
    this._name = name;
    this._genres = genres;
    this._status = status;
    this._runtime = runtime;
    this._premiered = premiered;
    this._rating = rating;
    this._image = image;
    this._summary = summary;
    this._episodes = episodes;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }
  get genres(): string[] {
    return this._genres;
  }
  get status(): string {
    return this._status;
  }

  get image(): IImage | undefined {
    return this._image;
  }
  get summary(): string | undefined {
    return this._summary;
  }

  public addEpisodes(episodes: Episode[]) {
    this._episodes = episodes;
  }

  public getSeasonAmount() {
    if (!this._episodes || this._episodes?.length <= 0) {
      return 0;
    }
    const seasonsSet = new Set(this._episodes?.map(episode => episode.season));

    return seasonsSet.size;
  }

  public getEpisodesUiBySeason(currentSeason: number): EpisodeUi[] {
    return this._episodes && this._episodes?.length > 0
      ? this._episodes
          .filter(episode => episode.season === currentSeason)
          .map(episode => ({
            description: episode.summary,
            duration: episode.airtime,
            images: [],
            season: episode.season,
            title: episode.name,
          }))
      : [];
  }

  public getShowInfoUi(): ShowInfoUi {
    const minutes = this._episodes?.reduce((acc, el) => {
      return acc + (el.runtime ?? 0);
    }, 0);

    return {
      episodes: this._episodes?.length ?? 0,
      genres: this._genres,
      imageUrl: this._image?.original || '',
      isFavorite: true,
      minutes: minutes ?? 0,
      rating: this._rating?.average?.toString() ?? '0',
      title: this._name,
    };
  }

  public getCast(): PersonInfoUi[] {
    return [
      {
        name: 'Actor One',
        imageURL: 'https://via.placeholder.com/150',
      },
      {
        name: 'Actor Two',
        imageURL: 'https://via.placeholder.com/150',
      },
      {
        name: 'Actor Three',
        imageURL: 'https://via.placeholder.com/150',
      },
      {
        name: 'Actor Three',
        imageURL: 'https://via.placeholder.com/150',
      },
      {
        name: 'Actor Three',
        imageURL: 'https://via.placeholder.com/150',
      },
      {
        name: 'Actor Three',
        imageURL: 'https://via.placeholder.com/150',
      },
    ];
  }

  static fromApiResponse(apiResponse: ShowApi): Show {
    return new Show({
      id: apiResponse.id,
      name: apiResponse.name,
      genres: apiResponse.genres,
      status: apiResponse.status,
      runtime: apiResponse.runtime,
      premiered: apiResponse.premiered,
      rating: apiResponse.rating,
      image: apiResponse.image,
      summary: apiResponse.summary,
    });
  }
}

export default Show;
