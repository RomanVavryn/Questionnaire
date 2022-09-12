import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {StorageService} from "./services/storage.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  routerSub!: Subscription;

  constructor(private router: Router, private storageService: StorageService) {
  }

  ngOnInit() {
    this.routerSub = this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.storageService.saveCurrentRoute(event.url);
      }
    })

    this.storageService.restoreCurrentRoute();
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }
}
