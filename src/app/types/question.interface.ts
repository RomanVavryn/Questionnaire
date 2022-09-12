import {QuestionTypesEnum} from "./question-types.enum";

export interface QuestionInterface {
  title: string;
  type: QuestionTypesEnum | null;
  createDate: string;
}
