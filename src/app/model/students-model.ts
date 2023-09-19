import {IStudies} from "./studies-model";

export interface IStudents {
  id?: number;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  description?: string;
  studyStartDate?: string;
  studyEndDate?: string;
  studies?: IStudies;
  gender?: string;
  birthDate?: string;
  createdAt?: string
}

export class Students implements IStudents {
  public id?: number
  public firstName?: string
  public lastName?: string
  public middleName?: string
  public description?: string
  public studyStartDate?: string
  public studyEndDate?: string
  public studies?: IStudies
  public gender?: string
  public birthDate?: string
  public createdAt?: string
}
