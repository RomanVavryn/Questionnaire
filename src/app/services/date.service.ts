import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  getCurrentTime(): string {
    const today: Date = new Date();
    const date: string = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time: string = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + ' ' + time;
  }
}
