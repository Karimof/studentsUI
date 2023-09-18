import {IStudies} from "./studies-model";

export interface IStudents {
  id?: number;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  description?: string;
  studyStartDate?: string;
  studyEndDate?: string;
  study?: IStudies;
  gender?: string;
  birthDate?: string;
  createdAt?: string
}

export class Students implements IStudents {
  constructor(
    id?: number,
    firstName?: string,
    lastName?: string,
    middleName?: string,
    description?: string,
    studyStartDate?: string,
    studyEndDate?: string,
    study?: IStudies,
    gender?: string,
    birthDate?: string,
    createdAt?: string
  ) {
  }
}
