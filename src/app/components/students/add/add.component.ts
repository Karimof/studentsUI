import {Component} from '@angular/core';
import {IStudents, Students} from "../../../model/students-model";
import {StudentServiceService} from "../../../services/students/student-service.service";
import {Router, RouterModule} from "@angular/router";
import {IStudies} from "../../../model/studies-model";
import {StudiesService} from "../../../services/studies/studies.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  student?: IStudents = new Students();
  studies?: IStudies[];
  study?: IStudies;

  constructor(
    private studentService: StudentServiceService,
    private router: Router,
    private studiesService: StudiesService
  ) {
  }

  ngOnInit() {
    this.studiesService.getStudies().subscribe(res => {
      if (res.body !== null) {
        this.studies = res.body
      }
    })
  }

  onSubmit(data: {
    firstname: string,
    lastname: string,
    middlename?: string,
    description?: string,
    ssday: string,
    seday: string,
    studiesId: number,
    gender: string,
    birthDate: string,
  }) {
    console.log(data)

    this.studies?.forEach(study => {
      if (study.id == data.studiesId){
        this.study = study
      }
    })

    this.student!.firstName = data.firstname!
    this.student!.lastName = data.lastname
    this.student!.middleName = data.middlename
    this.student!.description = data.description
    this.student!.studyStartDate = data.ssday
    this.student!.studyEndDate = data.seday
    this.student!.studies = this.study
    this.student!.gender = data.gender
    this.student!.birthDate = data.birthDate

    this.studentService.saveStudent(this.student!).subscribe(res => {
      if (res.body !== null) {
        this.router.navigate(['/students']).then()
      }
    })
  }
}
