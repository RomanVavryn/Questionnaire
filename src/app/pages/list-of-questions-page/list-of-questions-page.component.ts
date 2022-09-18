import {Component, OnInit} from '@angular/core';
import {QuestionInterface} from "../../types/question.interface";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-list-of-questions-page',
  templateUrl: './list-of-questions-page.component.html',
  styleUrls: ['./list-of-questions-page.component.scss']
})
export class ListOfQuestionsPageComponent implements OnInit {
  title: string = 'Lists of Questions';
  questions!: QuestionInterface[] | null;

  constructor(
    private storageService: StorageService,
  ) {
  }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {
    this.questions = this.storageService.getQuestions();
  }


}
