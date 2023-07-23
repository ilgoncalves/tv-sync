import {
  Person as PersonApi,
  Country,
  Image,
  PersonLinks,
} from '~/services/types';
import { IPerson, IPersonParams } from './interfaces';

export class Person implements IPerson {
  private _id: number;
  private _url: string;
  private _name: string;
  private _country?: Country | undefined;
  private _birthday?: string | undefined;
  private _deathday?: any;
  private _gender?: string;
  private _image?: Image;
  private _updated: number;
  private __links: PersonLinks;

  get id() {
    return this._id;
  }
  get url() {
    return this._url;
  }
  get name() {
    return this._name;
  }
  get gender() {
    return this._gender;
  }
  get image() {
    return this._image;
  }
  get updated() {
    return this._updated;
  }
  get _links() {
    return this.__links;
  }

  public constructor({
    id,
    url,
    name,
    country,
    birthday,
    deathday,
    gender,
    image,
    updated,
    _links,
  }: IPersonParams) {
    this._id = id;
    this._url = url;
    this._name = name;
    this._country = country;
    this._birthday = birthday;
    this._deathday = deathday;
    this._gender = gender;
    this._image = image;
    this._updated = updated;
    this.__links = _links;
  }

  static fromApiResponse(apiResponse: PersonApi): Person {
    return new Person({
      id: apiResponse.id,
      url: apiResponse.url,
      name: apiResponse.name,
      country: apiResponse.country,
      birthday: apiResponse.birthday,
      deathday: apiResponse.deathday,
      gender: apiResponse.gender,
      image: apiResponse.image,
      updated: apiResponse.updated,
      _links: apiResponse._links,
    });
  }
}

export default Person;
