import { Pipe, PipeTransform } from '@angular/core';
import {QuestionInterface} from "../types/question.interface";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(questions: QuestionInterface[], isAnswered?: 'answered'): QuestionInterface[] {
    if (isAnswered === 'answered') {
      return questions.filter((question: QuestionInterface) => question.isAnswered)
    } else {
      return questions.filter((question: QuestionInterface) => !question.isAnswered)
    }
  }

}
