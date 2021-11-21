import { Component, OnInit, EventEmitter, Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';

import {
  AuthService,
  GoogleLoginProvider,
  SocialUser
} from 'angular-6-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: any = SocialUser;
  products: any = [];
  id: string;
  // tslint:disable-next-line: max-line-length
  constructor(private socialAuthService: AuthService, public router: Router, public LoginService: LoginService) { }

  ngOnInit() {
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider: string;
    if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        if (userData) {
          this.user = userData;
          this.LoginService.userDetails(this.user);
          this.router.navigate(['/dashboard'], { skipLocationChange: true });
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('token', userData.idToken);
          localStorage.setItem('userName', userData.name);
          localStorage.setItem('userImage', userData.image);
        } else {
          localStorage.clear();
        }
      }
    );
  }


}


