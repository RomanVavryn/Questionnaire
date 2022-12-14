import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {QuestionManagementPageComponent} from './pages/question-management-page/question-management-page.component';
import {CreateQuestionPageComponent} from './pages/create-question-page/create-question-page.component';
import {QuestionEditPageComponent} from './pages/question-edit-page/question-edit-page.component';
import {ListOfQuestionsPageComponent} from './pages/list-of-questions-page/list-of-questions-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {
  QuestionCreateTypeComponent
} from './pages/create-question-page/components/question-create-type/question-create-type.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {EnumToArrayPipe} from './pipes/enumToArray.pipe';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from "@angular/material/chips";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {SortPipe} from './pipes/sort.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import {CreateOptionsComponent} from './pages/create-question-page/components/create-options/create-options.component';
import {
  AnswerOptionsComponent
} from './pages/list-of-questions-page/components/answer-options/answer-options.component';
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    QuestionManagementPageComponent,
    CreateQuestionPageComponent,
    QuestionEditPageComponent,
    ListOfQuestionsPageComponent,
    QuestionCreateTypeComponent,
    EnumToArrayPipe,
    SortPipe,
    FilterPipe,
    CreateOptionsComponent,
    AnswerOptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSnackBarModule,
    MatChipsModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
