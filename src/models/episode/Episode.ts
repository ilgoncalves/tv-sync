import {
  Episode as EpisodeApi,
  Rating,
  Image,
  EpisodeLinks,
} from '~/services/types';
import { IEpisode, IEpisodeParams } from './interfaces';

export class Episode implements IEpisode {
  private _id: number;
  private _url: string;
  private _name: string;
  private _season: number;
  private _number: number;
  private _type: string;
  private _airdate: string;
  private _airtime: string;
  private _airstamp: string;
  private _runtime?: number | undefined;
  private _rating: Rating;
  private _image: Image;
  private _summary: string;
  private __links: EpisodeLinks;

  private constructor(params: IEpisodeParams) {
    this._id = params.id;
    this._url = params.url;
    this._name = params.name;
    this._season = params.season;
    this._number = params.number;
    this._type = params.type;
    this._airdate = params.airdate;
    this._airtime = params.airtime;
    this._airstamp = params.airstamp;
    this._runtime = params.runtime;
    this._rating = params.rating;
    this._image = params.image;
    this._summary = params.summary;
    this.__links = params._links;
  }

  get id(): number {
    return this._id;
  }

  get url(): string {
    return this._url;
  }

  get name(): string {
    return this._name;
  }

  get season(): number {
    return this._season;
  }

  get number(): number {
    return this._number;
  }

  get type(): string {
    return this._type;
  }

  get airdate(): string {
    return this._airdate;
  }

  get airtime(): string {
    return this._airtime;
  }

  get airstamp(): string {
    return this._airstamp;
  }

  get runtime(): number | undefined {
    return this._runtime;
  }

  get rating(): Rating {
    return this._rating;
  }

  get image(): Image {
    return this._image;
  }

  get summary(): string {
    return this._summary;
  }

  get _links(): EpisodeLinks {
    return this.__links;
  }

  static fromApiResponse(apiResponse: EpisodeApi): Episode {
    return new Episode({
      id: apiResponse.id,
      url: apiResponse.url,
      name: apiResponse.name,
      season: apiResponse.season,
      number: apiResponse.number,
      type: apiResponse.type,
      airdate: apiResponse.airdate,
      airtime: apiResponse.airtime,
      airstamp: apiResponse.airstamp,
      runtime: apiResponse.runtime,
      rating: apiResponse.rating,
      image: apiResponse.image,
      summary: apiResponse.summary,
      _links: apiResponse._links,
    });
  }
}

export default Episode;
