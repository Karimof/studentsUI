import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsComponent} from "./components/students/list/students.component";
import {BrowserModule} from "@angular/platform-browser";
import {EditComponent} from "./components/students/edit/edit.component";
import {AddComponent} from "./components/students/add/add.component";

const routes: Routes = [
  {path: "students", component: StudentsComponent},
  {path: "students/:id", component: EditComponent},
  {path: "add", component: AddComponent},
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
