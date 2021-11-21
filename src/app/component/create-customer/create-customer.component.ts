import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../login/login.service';
import {UsermodulesService} from '../usermodules/usermodules.service';
import {UserBranchesService} from '../userbranches/user-branches.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  userModuleName = '';
  varUserDetails: any;
  varModuleDetails = '';
  varBranchDetails = '';
  userBranchDetails = '';

  // tslint:disable-next-line: max-line-length
  constructor(public router: Router, private LoginService: LoginService, private UsermodulesService: UsermodulesService, private UserBranchesService: UserBranchesService){}

  ngOnInit() {
    this.userModuleName = JSON.parse(localStorage.getItem('userModule'));
    this.userBranchDetails = JSON.parse(localStorage.getItem('userBranch'));
    console.log('modulename', this.userBranchDetails);
  }
  getUserDetails() {
    this.varUserDetails = localStorage.getItem('userDetails');
    this.LoginService.userDetails(this.varUserDetails);
    this.router.navigate(['/dashboard'], { skipLocationChange: true });
  }
  getModuleDetails() {
    this.varModuleDetails = JSON.parse(localStorage.getItem('userModule'));
    this.UsermodulesService.userModules(this.varModuleDetails);
    this.router.navigate(['/userModule'], { skipLocationChange: true });
  }

  getBranchDetails() {
    this.varBranchDetails = JSON.parse(localStorage.getItem('userBranchs'));
    this.UserBranchesService.userBranches(this.varBranchDetails);
    this.router.navigate(['/userBranches'], { skipLocationChange: true });

  }
}
