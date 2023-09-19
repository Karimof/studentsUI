import {Component} from '@angular/core';
import {IStudents} from "../../../model/students-model";
import {StudentServiceService} from "../../../services/students/student-service.service";
import * as XLSX from 'xlsx';
import {IStudies} from "../../../model/studies-model";
import {StudiesService} from "../../../services/studies/studies.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  studentList!: IStudents[];
  filterStudentList!: IStudents[];
  studies?: IStudies[];
  studyId: any=0;
  fileName: string = "StudentList.xlsx"

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  defaultPressed: any = 0;
  salom: any = "salom";

  constructor(private studentService: StudentServiceService, private studiesService: StudiesService) {
  }

  ngOnInit(): void {
    this.getStudentsList();
    this.getStudies();
  }

  getStudentsList() {
    this.studentService.getStudents().subscribe(res => {
      if (res.body) {
        this.studentList = res.body!;
        this.filterStudentList = this.studentList;
      }
    })
  }

  getStudies() {
    this.studiesService.getStudies().subscribe(value => {
      this.studies = value.body!
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

  filter() {
    if (this.studyId == "" || this.studyId == 0) {
      this.ngOnInit()
    } else {
      this.filterStudentList = this.studentList.filter(res => {
        return res.studies?.id!.toString().match(this.studyId.toLowerCase())
      })
    }
  }

  clearFilter() {
    this.studyId = 0;
    this.ngOnInit()
  }
}
