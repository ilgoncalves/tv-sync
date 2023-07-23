import { IEpisode, IEpisodeParams } from './interfaces';

export class Episode implements IEpisode {
  private constructor({}: IEpisodeParams) {}

  static fromApiResponse(apiResponse: any): Episode {
    return new Episode({});
  }
}

export default Episode;
