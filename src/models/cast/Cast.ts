import { Character, Cast as CastApi } from '~/services/types';
import { ICast, ICastParams } from './interfaces';
import { Person } from '../person';

export class Cast implements ICast {
  private _person: Person;
  private _character: Character;
  private _self: boolean;
  private _voice: boolean;

  private constructor({ character, person, self, voice }: ICastParams) {
    this._person = person;
    this._character = character;
    this._self = self;
    this._voice = voice;
  }

  get person(): Person {
    return this._person;
  }
  get character(): Character {
    return this._character;
  }
  get self(): boolean {
    return this._self;
  }
  get voice(): boolean {
    return this._voice;
  }

  static fromApiResponse(apiResponse: CastApi): Cast {
    const person = new Person({
      id: apiResponse.person.id,
      url: apiResponse.person.url,
      name: apiResponse.person.name,
      country: apiResponse.person.country,
      birthday: apiResponse.person.birthday,
      deathday: apiResponse.person.deathday,
      gender: apiResponse.person?.gender,
      image: apiResponse.person?.image,
      updated: apiResponse.person.updated,
      _links: apiResponse.person._links,
    });

    return new Cast({
      character: apiResponse.character,
      person,
      self: apiResponse.self,
      voice: apiResponse.voice,
    });
  }
}

export default Cast;
