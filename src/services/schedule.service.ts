import ApiService from './api.service';
import { ScheduleEpisode } from '~/services/types';

class ScheduleService extends ApiService {
  public constructor() {
    super('/schedule');
  }

  public getSchedule(country?: string, date?: string) {
    let url = '';
    if (country && date) {
      url += `?country=${encodeURIComponent(country)}&date=${encodeURIComponent(
        date,
      )}`;
    }
    return this.get<ScheduleEpisode[]>(url);
  }

  public getWebSchedule(country?: string, date?: string) {
    let url = '/web';
    if (country && date) {
      url += `?country=${encodeURIComponent(country)}&date=${encodeURIComponent(
        date,
      )}`;
    }
    return this.get<ScheduleEpisode[]>(url);
  }

  public getFullSchedule() {
    return this.get<ScheduleEpisode[]>('/full');
  }
}

export default ScheduleService;
