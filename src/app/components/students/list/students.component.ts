import {Component} from '@angular/core';
import {IStudents, Students} from "../../../model/students-model";
import {StudentServiceService} from "../../../services/students/student-service.service";
import {formatDate} from "@angular/common";
import {EditComponent} from "../edit/edit/edit.component";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  studentList?: IStudents[];

  constructor
  (
    protected studentService: StudentServiceService,
  ) {
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(res => {
      if (res.body) {
        this.studentList = res.body!;
        // value.studyStartDate = formatDate(value.studyStartDate!, "yyy-mm-dd", "en-US")
        console.log(this.studentList)
      }
    })
  }
}
