import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private router: Router) { }

  saveCurrentRoute(url: string): void {
    localStorage.setItem('CurrentRoute', url)
  }

  restoreCurrentRoute(): void {
    const url: string | null = localStorage.getItem('CurrentRoute');
    this.router.navigate([url]).then(r => {
      console.log('CurrentRoute restored ', r)
    })
  }
}
