import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StudentServiceService} from "./services/students/student-service.service";
import {IStudents} from "./model/students-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentsUI';
}
