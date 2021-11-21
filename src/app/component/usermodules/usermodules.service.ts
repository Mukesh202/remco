import { Injectable, EventEmitter } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class UsermodulesService {
  apiModuleData: any;
  $moduleApiResponse = new EventEmitter();
  constructor(private DashboardService: DashboardService) { }

  userModules(userBranches: any) {
    this.DashboardService.getUserModuleDataFromApi(userBranches).subscribe((data) => {
      this.apiModuleData = data;
      this.$moduleApiResponse.emit(this.apiModuleData);
    });
  }
}
