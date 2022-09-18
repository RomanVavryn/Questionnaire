import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-create-options',
  templateUrl: './create-options.component.html',
  styleUrls: ['./create-options.component.scss']
})
export class CreateOptionsComponent {
  @Input('answerOptions') answerOptions: string[] | undefined;
  @Output() addOption: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteOption: EventEmitter<string> = new EventEmitter<string>();
  answerOption!: string;

  addAnswerOptions(option: string) : void {
    if (option.length) {
      this.addOption.emit(option)
      this.answerOption = '';
    }
  }

  deleteAnswerOptions(option: string): void  {
    this.deleteOption.emit(option)
  }

}
