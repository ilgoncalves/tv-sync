import { Episode } from '../episode';

export interface IRating {
  average?: number;
}

export interface IImage {
  medium: string;
  original: string;
}

export interface IShowParams {
  id: number;
  name: string;
  genres: string[];
  status: string;
  runtime?: number;
  premiered?: string;
  rating?: IRating;
  image?: IImage;
  summary?: string;
  episodes?: Episode[];
}

export interface IShow extends IShowParams {}
