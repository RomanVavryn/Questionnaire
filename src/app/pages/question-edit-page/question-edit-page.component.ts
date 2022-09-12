import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {QuestionInterface} from "../../types/question.interface";

@Component({
  selector: 'app-question-edit-page',
  templateUrl: './question-edit-page.component.html',
  styleUrls: ['./question-edit-page.component.scss']
})
export class QuestionEditPageComponent implements OnInit {
  title: string = 'Question edit';

  questions: QuestionInterface[] | null = null;
  editItem: QuestionInterface | null = null;
  itemIndex!: number | null;

  constructor(
    private storageService: StorageService,
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
}
