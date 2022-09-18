import {QuestionTypesEnum} from "./question-types.enum";
import {QuestionAnswerInterface} from "./question-answer";

export interface QuestionInterface {
  title: string;
  type: QuestionTypesEnum | null;
  isAnswered: boolean;
  canAnswer: boolean;
  createDate: string;
  answeredDate: string;
  answerOptions: QuestionAnswerInterface[];
  userAnswer: string;
}

