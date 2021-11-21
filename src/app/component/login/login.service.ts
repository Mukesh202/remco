import { Injectable, EventEmitter } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiResponse = new  EventEmitter();
  apiData: any;
  googleData: any[];
  finalData: any[];
  constructor(private dashboard: DashboardService) { }

  userDetails(userDetails: any) {
    this.apiData = [];
    this.googleData = [];
    this.finalData = [];
    this.dashboard.getProductCategories(userDetails).subscribe((data) => {
      this.apiData = data;
      this.googleData = userDetails;
      this.finalData.push(this.apiData);
      this.finalData.push(this.googleData);
      this.apiResponse.emit(this.finalData);
    });
  }
}
