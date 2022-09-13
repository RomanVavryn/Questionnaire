import {QuestionTypesEnum} from "./question-types.enum";

export interface QuestionInterface {
  title: string;
  type: QuestionTypesEnum | null;
  isAnswered: boolean;
  createDate: string;
  answeredDate: string;
}
