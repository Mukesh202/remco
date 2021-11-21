import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/login.service';
import {SharedService} from '../shared/shared.service';
@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {

  constructor(private login: LoginService,private ss: SharedService) {
    this.sideMenu = false;
    this.ss = ss;
  }
  oauthDetails: any ;
  userName = '';
  userImage = '';
  sideMenu = false;
  ngOnInit() {
    this.ss.getEmittedValue().subscribe((data) =>{
      this.sideMenu = data;
    });
    this.oauthDetails = localStorage;
    this.userName = localStorage.getItem('userName');
    this.userImage = localStorage.getItem('userImage');
  }
}
