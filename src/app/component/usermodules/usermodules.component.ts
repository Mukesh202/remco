import { Component, OnInit } from '@angular/core';
import { UsermodulesService } from '../usermodules/usermodules.service';
import { UserBranchesService } from '../userbranches/user-branches.service';
import {LoginService} from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usermodules',
  templateUrl: './usermodules.component.html',
  styleUrls: ['./usermodules.component.css']
})
export class UsermodulesComponent implements OnInit {
  userModules: any;
  userDetails: any;
  userCompanyName: string= '';
  // tslint:disable-next-line: max-line-length
  constructor(private UsermodulesService: UsermodulesService, private UserBranchesService: UserBranchesService, public router: Router,private LoginService: LoginService) { }

  ngOnInit() {
    this.UsermodulesService.$moduleApiResponse.subscribe( (data) => {
      this.userModules = data;
      this.userCompanyName = JSON.parse(localStorage.getItem('companyDetails'));
      localStorage.setItem('userModule', JSON.stringify(this.userModules));
    });
  }

  getBranches(userModules){
    localStorage.setItem('userModule', JSON.stringify(userModules));
    this.UserBranchesService.userBranches(userModules);
    this.router.navigate(['/userBranches'], { skipLocationChange: true });
  }
  getCompanyList(){
    this.userDetails = localStorage.getItem('userDetails');
    this.LoginService.userDetails(this.userDetails);
    this.router.navigate(['/dashboard'], { skipLocationChange: true });
  }
}
