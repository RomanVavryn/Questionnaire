import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionManagementPageComponent } from './pages/question-management-page/question-management-page.component';
import { CreateQuestionPageComponent } from './pages/create-question-page/create-question-page.component';
import { QuestionEditPageComponent } from './pages/question-edit-page/question-edit-page.component';
import { ListOfQuestionsPageComponent } from './pages/list-of-questions-page/list-of-questions-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    QuestionManagementPageComponent,
    CreateQuestionPageComponent,
    QuestionEditPageComponent,
    ListOfQuestionsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
