import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {QuestionInterface} from "../../types/question.interface";
import {QuestionTypesEnum} from "../../types/question-types.enum";
import {MatRadioChange} from "@angular/material/radio";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question-edit-page',
  templateUrl: './question-edit-page.component.html',
  styleUrls: ['./question-edit-page.component.scss']
})
export class QuestionEditPageComponent implements OnInit {
  title: string = 'Question edit';
  questionTypes: typeof QuestionTypesEnum = QuestionTypesEnum;
  questions: QuestionInterface[] | null = null;
  editItem: QuestionInterface | null = null;
  itemIndex!: number | null;

  constructor(
    private storageService: StorageService,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initEditing();
  }

  private initEditing(): void {
    const itemToEdit: QuestionInterface | null = this.storageService.getItemToEdit();
    const questions: QuestionInterface[] | null = this.storageService.getQuestions();
    if (itemToEdit) {
      this.editItem = itemToEdit;
      this.storageService.clearItemToEdit();
      questions ? this.itemIndex = questions.indexOf(itemToEdit) : this.itemIndex = null;
    } else {
      questions ? this.questions = questions : this.questions = null;
    }
  }

  onChangeHandler(event: MatRadioChange) {
    if (this.editItem) {
      this.editItem.type = event.value;
    }
  }

  addNewOption(option: string) {
    if (this.editItem && this.editItem.type === QuestionTypesEnum.Open) {
      this.editItem.answerOptions.push({option})
    } else if (this.editItem) {
      this.editItem.answerOptions.push({option , checked: false})
    }
  }

  deleteOption(option: string) {
    if (this.editItem) {
      this.editItem.answerOptions = this.editItem.answerOptions.filter(value => value.option !== option);
    }
  }

  saveChanges(): void {
    if (this.editItem) {
      this.storageService.saveAnsweredQuestion(this.editItem);
      this.router.navigate(['/management']).then(r => {
        console.log('redirected ', r);
        this._snackBar.open('Question was edited!', 'message', {duration: 3500});
      });
    }
  }
}
