import {NgModule, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StudentsComponent} from './components/students/list/students.component';
import {HttpClientModule} from "@angular/common/http";
import {EditComponent} from './components/students/edit/edit.component';
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {AddComponent} from './components/students/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en-US'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
