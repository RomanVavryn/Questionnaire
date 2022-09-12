import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {QuestionCreateTypeComponent} from "./components/question-create-type/question-create-type.component";
import {take} from "rxjs";
import {QuestionInterface} from "../../types/question.interface";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-create-question-page',
  templateUrl: './create-question-page.component.html',
  styleUrls: ['./create-question-page.component.scss']
})
export class CreateQuestionPageComponent {
  title: string = 'Create question page';

  constructor( public dialog: MatDialog, private storageService: StorageService) { }

  createQuestion(): void {
    const dialogRef: MatDialogRef<QuestionCreateTypeComponent> = this.dialog.open(QuestionCreateTypeComponent);

    dialogRef.afterClosed().pipe(take(1)).subscribe((newQuestion: QuestionInterface) => {
      if (newQuestion) {
        newQuestion.createDate = this.getCurrentTime();
        this.storageService.addNewQuestion(newQuestion);
      }
    });

  }

  private getCurrentTime(): string {
    const today: Date = new Date();
    const date: string = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time: string = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + ' ' + time;
  }

}
