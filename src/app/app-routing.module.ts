import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionManagementPageComponent} from "./pages/question-management-page/question-management-page.component";
import {CreateQuestionPageComponent} from "./pages/create-question-page/create-question-page.component";
import {QuestionEditPageComponent} from "./pages/question-edit-page/question-edit-page.component";
import {ListOfQuestionsPageComponent} from "./pages/list-of-questions-page/list-of-questions-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'list' , pathMatch: 'full'},
  {path: 'list', component: ListOfQuestionsPageComponent, title: 'List'},
  {path: 'management', component: QuestionManagementPageComponent, title: 'Management'},
  {path: 'create', component: CreateQuestionPageComponent, title: 'Create'},
  {path: 'edit', component: QuestionEditPageComponent, title: 'Edit'},
  {path: '**', redirectTo: 'list'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
