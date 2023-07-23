import ApiService from './api.service';
import { SearchShowsResponse } from './types';

class SearchService extends ApiService {
  public constructor() {
    super('');
  }

  public searchShows(query: string) {
    return this.get<SearchShowsResponse[]>(
      `/search/shows?q=${encodeURIComponent(query)}`,
    );
  }

  public searchSingleShow(query: string) {
    return this.get(`/singlesearch/shows?q=${encodeURIComponent(query)}`);
  }

  public searchPeople(query: string) {
    return this.get(`/search/people?q=${encodeURIComponent(query)}`);
  }
}

export default SearchService;
