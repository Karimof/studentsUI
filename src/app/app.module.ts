import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/list/students.component';
import {HttpClientModule} from "@angular/common/http";
import { EditComponent } from './components/students/edit/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
