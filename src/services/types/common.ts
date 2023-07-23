export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime?: number;
  averageRuntime?: number;
  premiered?: string;
  ended?: string;
  officialSite?: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network?: Network;
  webChannel?: WebChannel;
  dvdCountry?: any;
  externals: Externals;
  image?: Image;
  summary?: string;
  updated: number;
  _links: ShowLinks;
}

export interface ShowLinks {
  self: Self;
  previousepisode?: Self;
}

export interface Self {
  href: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Externals {
  tvrage?: number;
  thetvdb?: number;
  imdb?: string;
}

export interface WebChannel {
  id: number;
  name: string;
  country: Country;
  officialSite?: any;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite?: string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Rating {
  average?: number;
}

export interface Schedule {
  time: string;
  days: string[];
}

// Episode types

export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime?: number;
  rating: Rating;
  image: Image;
  summary: string;
  _links: EpisodeLinks;
}

export interface EpisodeLinks {
  self: Self;
  show: Self;
}

// Person types

export interface Cast {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
}

export interface Character {
  id: number;
  url: string;
  name: string;
  image?: Image;
  _links: PersonLinks;
}

export interface Person {
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

export interface PersonLinks {
  self: Self;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}
