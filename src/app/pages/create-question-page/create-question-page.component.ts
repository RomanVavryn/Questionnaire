import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {QuestionCreateTypeComponent} from "./components/question-create-type/question-create-type.component";
import {take} from "rxjs";
import {QuestionInterface} from "../../types/question.interface";
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-question-page',
  templateUrl: './create-question-page.component.html',
  styleUrls: ['./create-question-page.component.scss']
})
export class CreateQuestionPageComponent {
  title: string = 'Create question';

  constructor(
    public dialog: MatDialog,
    private storageService: StorageService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  createQuestion(): void {
    const dialogRef: MatDialogRef<QuestionCreateTypeComponent> = this.dialog.open(QuestionCreateTypeComponent);

    dialogRef.afterClosed().pipe(take(1)).subscribe((newQuestion: QuestionInterface) => {
      if (newQuestion) {
        newQuestion.createDate = this.getCurrentTime();
        this.storageService.addNewQuestion(newQuestion);
        this.router.navigate(['/management']).then(r => {
          console.log('redirected ', r);
          this._snackBar.open('Question was created!', 'message', {duration: 3500});
        })
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
