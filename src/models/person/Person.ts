import { IPerson, IPersonParams } from './interfaces';

export class Person implements IPerson {
  private constructor({}: IPersonParams) {}

  static fromApiResponse(apiResponse: any): Person {
    return new Person({});
  }
}

export default Person;
