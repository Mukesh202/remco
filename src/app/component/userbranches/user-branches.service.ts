import { Injectable, EventEmitter } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class UserBranchesService {
  apiBranchData: any;
  $branchApiResponse = new EventEmitter();
  constructor(private DashboardService: DashboardService) { }

  userBranches(userBranches: any) {
    this.DashboardService.getBranchesFromApi(userBranches).subscribe((data) => {
      this.apiBranchData = data;
      this.$branchApiResponse.emit(this.apiBranchData);
    });
  }
}
