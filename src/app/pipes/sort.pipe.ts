import { Pipe, PipeTransform } from '@angular/core';
import {QuestionInterface} from "../types/question.interface";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(questions: QuestionInterface[], isAnswered?: 'answered'): QuestionInterface[] {
    if (isAnswered === 'answered') {
      return questions.sort(
        (a: QuestionInterface, b: QuestionInterface) => Date.parse(b.answeredDate) - Date.parse(a.answeredDate)
      );
    } else {
      return questions.sort(
        (a: QuestionInterface, b: QuestionInterface) => Date.parse(b.createDate) - Date.parse(a.createDate)
      );
    }
  }

}
