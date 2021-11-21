import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import {SharedService} from '../../src/app/component/shared/shared.service';
import { UserbranchesComponent } from './component/userbranches/userbranches.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'indiaBusiness';
  showHead = false;

  constructor(private router: Router, private ss: SharedService) {
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          console.log('url', event.url);
          if (event.url === '/login' || event.url === '/') {
            this.showHead = false;
          }  else {
            this.showHead = true;
          }
        }
      });
    }
    ngOnInit() {
    }
}
