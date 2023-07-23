import { Country, Image, PersonLinks } from '~/services/types';

export interface IPersonParams {
  id: number;
  url: string;
  name: string;
  country?: Country;
  birthday?: string;
  deathday?: any;
  gender: string;
  image: Image;
  updated: number;
  _links: PersonLinks;
}

export interface IPerson extends IPersonParams {}
