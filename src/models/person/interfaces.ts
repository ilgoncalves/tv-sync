import { Character, Person } from '~/services/types';

export interface IPersonParams {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
}

export interface IPerson extends IPersonParams {}
