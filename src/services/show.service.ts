import ApiService from './api.service';

class ShowsService extends ApiService {
  public constructor() {
    super('');
  }

  public getShowInformation(id: string) {
    return this.get(`/shows/${id}`);
  }

  public getEpisodeList(id: string) {
    return this.get(`/shows/${id}/episodes`);
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
    return this.get(`/shows/${id}/cast`);
  }

  public getShowCrew(id: string) {
    return this.get(`/shows/${id}/crew`);
  }

  public getShowAkas(id: string) {
    return this.get(`/shows/${id}/akas`);
  }

  public getShowImages(id: string) {
    return this.get(`/shows/${id}/images`);
  }

  public getShowIndex(pageNum: number) {
    return this.get(`/shows`, { params: { page: pageNum } });
  }
}

export const showsService = new ShowsService();