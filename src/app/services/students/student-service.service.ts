import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IStudents} from "../../model/students-model";

const endPoint = 'http://localhost:9093/students'

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(protected http: HttpClient) {
  }

  getStudents(): Observable<HttpResponse<IStudents[]>> {
    return this.http.get<IStudents[]>(endPoint, {observe: 'response'})
  }

  getStudent(id: number): Observable<HttpResponse<IStudents>> {
    return this.http.get<IStudents>(endPoint + "/" + id, {observe: 'response'})
  }

  editStudent(students: IStudents): Observable<HttpResponse<IStudents>> {
    return this.http.put(endPoint, students, {observe: 'response'})
  }

  deleteStudent(id: number): Observable<HttpResponse<any>> {
    return this.http.delete(endPoint + "/" + id, {observe: 'response'})
  }

  saveStudent(students: IStudents): Observable<HttpResponse<IStudents>> {
    return this.http.post(endPoint, students, {observe: 'response'})
  }
}
