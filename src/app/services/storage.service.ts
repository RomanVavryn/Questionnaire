import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {QuestionInterface} from "../types/question.interface";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private router: Router) {
  }

  // Question
  getQuestions(): QuestionInterface[] | null {
    const questionsString = localStorage.getItem('questions');
    return questionsString ? JSON.parse(questionsString) : null;
  }

  addNewQuestion(question: QuestionInterface): void {
    const questions: QuestionInterface[] | null = this.getQuestions();
    if (questions?.length) {
      const newQuestionArray: QuestionInterface[] = [...questions, question];
      localStorage.setItem('questions', JSON.stringify(newQuestionArray));
    } else {
      localStorage.setItem('questions', JSON.stringify([question]));
    }
  }

  saveAnsweredQuestion(item: QuestionInterface): void {
    const questions: QuestionInterface[] | null = this.getQuestions();
    if (questions?.length) {
      const filteredQuestions = questions.filter((question: QuestionInterface) => question.createDate !== item.createDate);
      const newQuestionArray: QuestionInterface[] = [...filteredQuestions, item];
      localStorage.setItem('questions', JSON.stringify(newQuestionArray));
    } else {
      console.log('Error')
    }
  }

  saveQuestions(questions: QuestionInterface[]): void {
    localStorage.setItem('questions', JSON.stringify(questions));
  }

  deleteQuestions(): void {
    localStorage.removeItem('questions');
  }

  // question edit
  setItemToEdit(qItem: QuestionInterface): void {
    localStorage.setItem('itemToEdit', JSON.stringify(qItem));
  }

  getItemToEdit(): QuestionInterface | null {
    const item = localStorage.getItem('itemToEdit');
    return item ? JSON.parse(item) : null;
  }

  clearItemToEdit(): void {
    localStorage.removeItem('itemToEdit');
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
