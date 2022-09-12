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
    console.log('questionsString ', questionsString)
    if (questionsString) {
      return JSON.parse(questionsString);
    } else {
      return null;
    }
  }

  addNewQuestion(question: QuestionInterface): void {
    const questions = this.getQuestions();
    if (questions) {
      questions.unshift(question);
    } else {
      localStorage.setItem('questions', JSON.stringify(question));
    }
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
