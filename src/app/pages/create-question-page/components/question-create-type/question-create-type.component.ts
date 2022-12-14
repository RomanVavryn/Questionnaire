import {Component} from '@angular/core';
import {QuestionTypesEnum} from "../../../../types/question-types.enum";
import {MatRadioChange} from "@angular/material/radio";
import {QuestionInterface} from "../../../../types/question.interface";

@Component({
  selector: 'app-question-create-type',
  templateUrl: './question-create-type.component.html',
  styleUrls: ['./question-create-type.component.scss']
})
export class QuestionCreateTypeComponent {
  questionTypes: typeof QuestionTypesEnum = QuestionTypesEnum;
  newQuestion: QuestionInterface = {
    title: '',
    type: null,
    createDate: '',
    isAnswered: false,
    canAnswer: false,
    answeredDate: '',
    answerOptions: [],
    userAnswer: '',
  }

  onChangeHandler(event: MatRadioChange) {
    this.newQuestion.type = event.value;
  }

  addNewOption(option: string) {
    if (this.newQuestion.type === QuestionTypesEnum.Open) {
      this.newQuestion.answerOptions.push({option})
    } else {
      this.newQuestion.answerOptions.push({option , checked: false})
    }
  }

  deleteOption(option: string) {
    this.newQuestion.answerOptions = this.newQuestion.answerOptions.filter(value => value.option !== option);
  }
}
