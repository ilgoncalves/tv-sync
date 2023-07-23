import { Person as PersonApi, Character, Cast } from '~/services/types';
import { IPerson, IPersonParams } from './interfaces';

export class Person implements IPerson {
  private _person: PersonApi;
  private _character: Character;
  private _self: boolean;
  private _voice: boolean;

  private constructor({ character, person, self, voice }: IPersonParams) {
    this._person = person;
    this._character = character;
    this._self = self;
    this._voice = voice;
  }

  get person(): PersonApi {
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

  static fromApiResponse(apiResponse: Cast): Person {
    return new Person({
      character: apiResponse.character,
      person: apiResponse.person,
      self: apiResponse.self,
      voice: apiResponse.voice,
    });
  }
}

export default Person;
