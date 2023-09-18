import {Component} from '@angular/core';
import {StudentServiceService} from "../../../../services/students/student-service.service";
import {ActivatedRoute} from "@angular/router";
import {IStudents} from "../../../../model/students-model";
import {StudentService} from "../../../../../../app/services/student.service";
import {IStudies} from "../../../../model/studies-model";
import {StudiesService} from "../../../../services/studies/studies.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  student?: IStudents;
  studies?: IStudies[];
  gender?: string;

  constructor(
    protected studentService: StudentServiceService,
    protected studiesService: StudiesService,
    protected route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get("id"));
    this.studentService.getStudent(id).subscribe(res => {
      if (res !== null) {
        this.student! = res.body!;
      }
    })

    this.studiesService.getStudies().subscribe(res => {
      if (res !== null) {
        this.studies = res.body!;
      }
    })

    if (this.student?.gender === "Male") {
      let gender = document.getElementById("male")
      console.log(gender)
    }
  }
}

