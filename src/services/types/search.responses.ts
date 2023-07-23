import { Person, Show } from './common';

export interface SearchShowsResponse {
  score: number;
  show: Show;
}

export interface SearchPeopleResponse {
  score: number;
  person: Person;
}
