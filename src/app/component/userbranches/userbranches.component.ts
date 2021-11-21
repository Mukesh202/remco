import { Component, OnInit, Input } from '@angular/core';
import {UserBranchesService} from '../userbranches/user-branches.service';
import {LoginService} from '../login/login.service';
import {UsermodulesService} from '../usermodules/usermodules.service';
import { Router } from '@angular/router';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-userbranches',
  templateUrl: './userbranches.component.html',
  styleUrls: ['./userbranches.component.css']
})
export class UserbranchesComponent implements OnInit {
  @Input() showMenu: boolean;
  userBranches: any = [];
  userDetails: any;
  varUserDetails: any;
  varModuleDetails: any;
  userCompanyName = '';
  userModuleName = '';
  varUserBranch = '';
  showRightArrow = false;
  varUserRole = '';
  showBranch = true;
  hideSpan = true;
  hideSpanlink = false;
  varBranchDetails : any;
  // tslint:disable-next-line: max-line-length
  constructor(private UserBranchesService: UserBranchesService, private LoginService: LoginService,private UsermodulesService: UsermodulesService, public router: Router, private ss: SharedService) {
    this.ss = ss;
  }

  ngOnInit() {
    this.UserBranchesService.$branchApiResponse.subscribe( (data) => {
      this.userBranches = data;
      this.userModuleName = JSON.parse(localStorage.getItem('userModule'));
      localStorage.setItem('userBranches', JSON.stringify(this.userBranches));
    });
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
  enterInBranch(branch: any) {
    this.showMenu = true;
    this.ss.showSideMenu(this.showMenu);
    console.log('branch Name', branch);
    localStorage.setItem('userBranch', JSON.stringify(branch));
    this.showBranch = false;
    this.hideSpanlink = true;
    this.hideSpan = false;
    this.showRightArrow = true;
    this.varUserBranch = branch.Map_location_Desc;
    this.varModuleDetails = JSON.parse(localStorage.getItem('userModule'));
    this.varUserRole = this.varModuleDetails.RoleCode;
  }

  getBranchDetails() {
    this.varBranchDetails = JSON.parse(localStorage.getItem('userBranchs'));
    this.UserBranchesService.userBranches(this.varBranchDetails);
    this.showBranch = true;
    this.hideSpan = true;
    this.hideSpanlink = false;
    this.router.navigate(['/userBranches'], { skipLocationChange: true });

  }
}


