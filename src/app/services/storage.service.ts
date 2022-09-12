import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {QuestionInterface} from "../types/question.interface";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private router: Router) { }

  // Question
  getQuestions(): QuestionInterface[] | null {
    const questionsString = localStorage.getItem('questions');
    if (questionsString) {
      return JSON.parse(questionsString);
    } else {
      return null;
    }
  }

  addNewQuestion(question: QuestionInterface): void {
    const questions: QuestionInterface[] | null = this.getQuestions();
    if (questions?.length) {
      const newQuestionArray: QuestionInterface[] = [question, ...questions];
      localStorage.setItem('questions', JSON.stringify(newQuestionArray));
    } else {
      localStorage.setItem('questions', JSON.stringify([question]));
    }
  }

  saveQuestions(questions: QuestionInterface[]): void {
    localStorage.setItem('questions', JSON.stringify(questions));
  }

  deleteQuestions(): void {
    localStorage.removeItem('questions');
  }

  // Route
  saveCurrentRoute(url: string): void {
    localStorage.setItem('CurrentRouteURL', url)
  }

  restoreCurrentRoute(): void {
    const url: string | null = localStorage.getItem('CurrentRouteURL');
    this.router.navigate([url]).then(r => {
      console.log('CurrentRoute restored ', r)
    })
  }

}
