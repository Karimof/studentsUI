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

  studentList!: IStudents[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;

  constructor
  (
    protected studentService: StudentServiceService,
  ) {
  }

  ngOnInit(): void {
    this.getStudentsList();
  }

  getStudentsList() {
    this.studentService.getStudents().subscribe(res => {
      if (res.body) {
        this.studentList = res.body!;
        // value.studyStartDate = formatDate(value.studyStartDate!, "yyy-mm-dd", "en-US")
      }
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getStudentsList();
  }

  delete(id?: number) {
    if (confirm("Are you sure to delete student id " + id)) {
      this.studentService.deleteStudent(id!)
    }
  }
}
