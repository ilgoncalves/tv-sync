import { Character } from '~/services/types';
import { Person } from '../person';

export interface ICastParams {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
}

export interface ICast extends ICastParams {}
