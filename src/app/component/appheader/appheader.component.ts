import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/login.service';
import { Router } from '@angular/router';
import { AuthloginService} from '../../authlogin.service';
import {UsermodulesService} from '../usermodules/usermodules.service';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {
  oauthDetails: any = [];
  userName = '';
  userImage= '';
  // tslint:disable-next-line: max-line-length
  constructor(private login: LoginService, private UsermodulesService: UsermodulesService, public router: Router,private AuthloginService: AuthloginService) { }
  ngOnInit() {
    this.oauthDetails = localStorage;
    this.userName= localStorage.getItem('userName');
    this.userImage = localStorage.getItem('userImage');
  }
  logout(): void {
    console.log('Logout');
    this.AuthloginService.logout();
    this.router.navigate(['/login'], { skipLocationChange: true });
  }
}
