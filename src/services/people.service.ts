import ApiService from './api.service';

class PersonService extends ApiService {
  public constructor() {
    super('/people');
  }

  public getPersonInformation(id: string) {
    return this.get(`/${id}`);
  }

  public getPersonCastCredits(id: string) {
    return this.get(`/${id}/castcredits`);
  }

  public getPersonCrewCredits(id: string) {
    return this.get(`/${id}/crewcredits`);
  }

  public getPersonGuestCastCredits(id: string) {
    return this.get(`/${id}/guestcastcredits`);
  }

  public getPersonIndex(pageNum: number) {
    return this.get('', { params: { page: pageNum } });
  }
}

export default PersonService;
