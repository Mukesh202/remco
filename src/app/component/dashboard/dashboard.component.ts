import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/login.service';
import { Router } from '@angular/router';
import { AuthloginService} from '../../authlogin.service';
import {UsermodulesService} from '../usermodules/usermodules.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private login: LoginService, private UsermodulesService: UsermodulesService, public router: Router,private AuthloginService: AuthloginService) { }
  userDetails: any ;
  userLocalDetails: any = [];
  getModules(companyDetails: any) {
    localStorage.setItem('companyDetails', JSON.stringify(companyDetails));
    this.UsermodulesService.userModules(companyDetails);
    this.router.navigate(['/userModule'],{ skipLocationChange: true });
  }
  ngOnInit() {
    this.login.apiResponse.subscribe( (data) => {
      this.userDetails = data[0];
      localStorage.setItem('userDetails', JSON.stringify(data[0]));
      this.userLocalDetails = localStorage.getItem('userDetails');

    });
  }


}
