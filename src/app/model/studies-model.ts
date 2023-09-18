import {IUniversities} from "./universities-model";

export interface IStudies {
  id?: number;
  name?: string;
  university?: IUniversities
}

export class Studies implements IStudies {
  constructor(
    public id?: number,
    public name?: string,
    public university?: IUniversities
  ) {}
}
