import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IStudents} from "../../model/students-model";
import {Resource} from "@angular/compiler-cli/src/ngtsc/metadata";

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

  saveAvatar(file: any) {
   return this.http.post('http://localhost:9093/avatar', file, {observe: 'response'})
  }

  getAvatar(studentId: number): Observable<any> {
    return this.http.get('http://localhost:9093/avatar/' + studentId, {observe: 'response', responseType:"blob"})
  }

  deleteStudent(id: number): Observable<HttpResponse<any>> {
    return this.http.delete(endPoint + "/" + id, {observe: 'response'})
  }

  saveStudent(students: IStudents): Observable<HttpResponse<IStudents>> {
    return this.http.post(endPoint, students, {observe: 'response'})
  }
}
