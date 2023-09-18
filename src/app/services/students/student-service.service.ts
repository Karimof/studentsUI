import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IStudents} from "../../model/students-model";

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(protected http: HttpClient) {
  }

  getStudents(): Observable<HttpResponse<IStudents[]>> {
    return this.http.get<IStudents[]>('http://localhost:9093/students', {observe: 'response'})
  }

  getStudent(id: number): Observable<HttpResponse<IStudents>> {
    return this.http.get<IStudents>('http://localhost:9093/students/' + id, {observe: 'response'})
  }
}
