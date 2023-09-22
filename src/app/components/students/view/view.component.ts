import {Component, ElementRef, ViewChild} from '@angular/core';
import {StudentServiceService} from "../../../services/students/student-service.service";
import {IStudents} from "../../../model/students-model";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import jsPDF from "jspdf";


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  @ViewChild('content', {static: false}) el!: ElementRef
  student?: IStudents;
  avatar?: FormData;
  image: any

  constructor(private studentService: StudentServiceService,
              protected route: ActivatedRoute,
              private sanitizer: DomSanitizer,) {
  }

  generatePdf(){
    let pdf = new jsPDF('p','pt','a3')
    pdf.html(this.el.nativeElement,{
      callback:(pdf) =>{
        pdf.save("pdf-resume")
      }
    })
  }

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get("id"));
    this.studentService.getStudent(id!).subscribe(res => {
      if (res.body !== null) {
        this.student = res.body
        if (this.student.avatar !== null) {
          this.studentService.getAvatar(id).subscribe(image => {
            if (image !== null) {
              this.avatar = image.image;

              let blob = new Blob([image['body']], {type: 'image/png'});
              let objectURL = URL.createObjectURL(blob);
              this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);

              console.log(image)
              // this.avatar?.get(this.student?.avatar!)
            }
          })
        }
      }
    })
  }


  // exportAsPDF(divId: string) {
  //   let data = document.getElementById('divId');
  //   html2canvas(data!).then(canvas => {
  //     const contentDataURL = canvas.toDataURL('image/png')  // 'image/jpeg' for lower quality output.
  //     let pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
  //
  //     // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
  //     pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);
  //     pdf.save('Filename.pdf');
  //   });
  // }
}
