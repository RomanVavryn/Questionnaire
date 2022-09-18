import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatRadioChange} from "@angular/material/radio";
import {QuestionAnswerInterface} from "../../../../types/question-answer";
import {StorageService} from "../../../../services/storage.service";
import {QuestionInterface} from "../../../../types/question.interface";
import {DateService} from "../../../../services/date.service";

@Component({
  selector: 'app-answer-options',
  templateUrl: './answer-options.component.html',
  styleUrls: ['./answer-options.component.scss']
})
export class AnswerOptionsComponent {
  @Input() item!: QuestionInterface;
  @Output() update: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private storageService: StorageService,
    private dateService: DateService,
  ) {
  }

  onRadioChangeHandle(event: MatRadioChange): void {
    const {value} = event
    let selection
    this.item.answerOptions?.forEach((option: QuestionAnswerInterface) => {
      if (option.option === value) {
        option.checked = true
        selection = option
      } else
        option.checked = false;
    });
    this.item.canAnswer = !!selection;
  }

  onCheckBoxChangeHandle() {
    const checkedItems = this.item.answerOptions?.filter((option: QuestionAnswerInterface) => option.checked);
    this.item.canAnswer = !!checkedItems.length;
  }

  onTextAreaInputHandle() {
    this.item.canAnswer = this.item.userAnswer.length >= 1 && this.item.userAnswer.length <= 255;
  }

  saveAnswer(): void {
    // TODO: make saving and updating only answered item
    // bug: if we save an item and other items have unsaved answered values, they will be reset
    this.item.isAnswered = true;
    this.item.canAnswer = false;
    this.item.answeredDate = this.dateService.getCurrentTime();
    this.storageService.saveAnsweredQuestion(this.item);
    this.update.emit();
  }

  unAnswerQuestion(): void {
    this.item.isAnswered = false;
    this.item.canAnswer = false;
    this.item.answeredDate = '';
    this.item.userAnswer = '';
    this.item.answerOptions.forEach((option:QuestionAnswerInterface) => option.checked = false)
    this.storageService.saveAnsweredQuestion(this.item);
    this.update.emit();
  }
}
