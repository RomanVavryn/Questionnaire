import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {QuestionInterface} from "../../types/question.interface";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question-management-page',
  templateUrl: './question-management-page.component.html',
  styleUrls: ['./question-management-page.component.scss']
})
export class QuestionManagementPageComponent implements OnInit {
  title: string = 'Question Management';
  questionList: QuestionInterface[] | null = null;

  constructor(
    private storageService: StorageService,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initQuestionList();
  }

  private initQuestionList(): void {
    const questions: QuestionInterface[] | null = this.storageService.getQuestions();
    if (questions?.length) {
      this.questionList = questions.sort(
        (a: QuestionInterface, b: QuestionInterface) => Date.parse(b.createDate) - Date.parse(a.createDate)
      )
    } else {
      this.questionList = null;
    }
  }

  deleteQuestion(qItem: QuestionInterface): void {
    const questionList: QuestionInterface[] | undefined = this.questionList?.filter((item: QuestionInterface) => item !== qItem);
    if (questionList?.length) {
      this.storageService.saveQuestions(questionList);
    } else {
      this.storageService.deleteQuestions();
    }
    this.initQuestionList();
    this._snackBar.open('Question was deleted!', 'message', {duration: 3500});
  }

  editQuestion(qItem: QuestionInterface) {
    this.storageService.setItemToEdit(qItem);
    this.router.navigate(['/edit']).then(r => {
      console.log('redirected ', r);
    });
  }
}
