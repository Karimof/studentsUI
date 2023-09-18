import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IStudents} from "../../model/students-model";
import {IStudies} from "../../model/studies-model";

@Injectable({
  providedIn: 'root'
})
export class StudiesService {

  constructor(protected http: HttpClient) {
  }

  getStudies(): Observable<HttpResponse<IStudies[]>> {
    return this.http.get<IStudies[]>('http://localhost:9093/studies', {observe: 'response'})
  }
}
