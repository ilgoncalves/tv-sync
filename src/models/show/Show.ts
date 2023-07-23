import { SearchShowsResponse } from '~/services/types';
import { IImage, IRating, IShow, IShowParams } from './interfaces';

export class Show implements IShow {
  private _id: number;
  private _name: string;
  private _genres: string[];
  private _status: string;
  private _runtime?: number | undefined;
  private _premiered?: string | undefined;
  private _rating?: IRating | undefined;
  private _image?: IImage | undefined;
  private _summary?: string | undefined;

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

  static fromApiResponse(apiResponse: SearchShowsResponse): Show {
    const showData = apiResponse.show;
    return new Show({
      id: showData.id,
      name: showData.name,
      genres: showData.genres,
      status: showData.status,
      runtime: showData.runtime,
      premiered: showData.premiered,
      rating: showData.rating,
      image: showData.image,
      summary: showData.summary,
    });
  }
}

export default Show;
