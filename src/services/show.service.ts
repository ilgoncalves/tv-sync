import ApiService from './api.service';
import { Cast, Crew, Episode, Show } from './types';

class ShowService extends ApiService {
  public constructor() {
    super('');
  }

  public getShowInformation(id: string) {
    return this.get<Show>(`/shows/${id}`);
  }

  public getEpisodeList(id: string) {
    return this.get<Episode[]>(`/shows/${id}/episodes`);
  }

  public getAlternateLists(id: string) {
    return this.get(`/shows/${id}/alternatelists`);
  }

  public getEpisodeByNumber(id: string, season: number, number: number) {
    return this.get(`/shows/${id}/episodebynumber`, {
      params: { season, number },
    });
  }

  public getEpisodesByDate(id: string, date: string) {
    return this.get(`/shows/${id}/episodesbydate`, { params: { date } });
  }

  public getShowSeasons(id: string) {
    return this.get(`/shows/${id}/seasons`);
  }

  public getSeasonEpisodes(id: string) {
    return this.get(`/seasons/${id}/episodes`);
  }

  public getShowCast(id: string) {
    return this.get<Cast[]>(`/shows/${id}/cast`);
  }

  public getShowCrew(id: string) {
    return this.get<Crew[]>(`/shows/${id}/crew`);
  }

  public getShowAkas(id: string) {
    return this.get(`/shows/${id}/akas`);
  }

  public getShowImages(id: string) {
    return this.get(`/shows/${id}/images`);
  }

  public getShowIndex(pageNum: number) {
    return this.get<Show[]>('/shows', { params: { page: pageNum } });
  }
}

export default ShowService;
