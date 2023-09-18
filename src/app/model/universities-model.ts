export interface IUniversities {
  id?: number;
  name?: string;
}

export class Universities implements IUniversities {
  constructor(
    public id?: number,
    public name?: string,
  ) {}
}
