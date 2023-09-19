import {Component} from '@angular/core';
import {IStudents} from "../../../model/students-model";
import {StudentServiceService} from "../../../services/students/student-service.service";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  studentList!: IStudents[];
  fileName: string = "StudentList.xlsx"

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;

  constructor(private studentService: StudentServiceService) {
  }

  ngOnInit(): void {
    this.getStudentsList();
  }

  getStudentsList() {
    this.studentService.getStudents().subscribe(res => {
      if (res.body) {
        this.studentList = res.body!;
      }
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getStudentsList();
  }

  delete(id?: number) {
    if (confirm("Are you sure to delete student id " + id)) {
      this.studentService.deleteStudent(id!).subscribe(value => {
        this.ngOnInit()
      })
    }
  }

  export() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.studentList);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }
}
