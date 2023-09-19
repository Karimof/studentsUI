import {Component} from '@angular/core';
import {StudentServiceService} from "../../../../services/students/student-service.service";
import {ActivatedRoute} from "@angular/router";
import {IStudents} from "../../../../model/students-model";
import {IStudies} from "../../../../model/studies-model";
import {StudiesService} from "../../../../services/studies/studies.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  student?: IStudents;
  studies?: IStudies[];
  gender?: string;
  defaultSelect?: number;

  constructor(
    protected studentService: StudentServiceService,
    protected studiesService: StudiesService,
    protected route: ActivatedRoute,
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get("id"));
    this.studentService.getStudent(id).subscribe(res => {
      if (res !== null) {
        this.student = res.body!;
        this.defaultSelect = this.student?.studies?.id
      }
    })

    this.studiesService.getStudies().subscribe(res => {
      if (res !== null) {
        this.studies = res.body!;
      }
    })
  }

  onSubmit(data: {
    firstname: string,
    lastname: string,
    middlename: string,
    description: string,
    ssday: string,
    seday: string,
    studiesId: number,
    gender: string,
    birthDate: string,
  }) {
    this.student!.firstName = data.firstname
    this.student!.lastName = data.lastname
    this.student!.middleName = data.middlename
    this.student!.description = data.description
    this.student!.studyStartDate = data.ssday
    this.student!.studyEndDate = data.seday
    this.student!.studies!.id = data.studiesId
    this.student!.gender = data.gender
    this.student!.birthDate = data.birthDate

    this.studentService.editStudent(this.student!).subscribe(res => {
      if (res.body !== null){
        console.log(res.body)
      }
    })
  }
}

