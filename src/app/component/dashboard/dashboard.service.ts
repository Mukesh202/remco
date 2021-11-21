import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  showSideMenu = false;
  companyDetailsBody = {};
  userBranchesBody = {};
  userModuleBody: {};
  constructor(private http: HttpClient) {}

  getProductCategories(userData: any): Observable<any> {
    this.companyDetailsBody =  {
      documentelement: {
        RowID: [
          {
          email: 'amit.varma@in.g4s.com',
          spName: 'ng_BP_CMN_ACCESS_SP'
          }
        ]
      }
     };
    return this.http.post<any>('http://10.133.18.18:14675/api/commonAPI', this.companyDetailsBody);
  }

  getBranchesFromApi(userCompany: any): Observable<any> {
    console.log('userCompany', userCompany);
    this.userBranchesBody =  {
      documentelement: {
        RowID: [
          {
          useEmailId: userCompany.Email,
          UserName: userCompany.UserName,
          CompanyCode: userCompany.CompanyCode,
          spName: 'ng_BP_CMN_ACCESS_SP_Branches'
          }
        ]
      }
     };
    return this.http.post<any>('http://10.133.18.18:14675/api/commonAPI', this.userBranchesBody);
  }

  getUserModuleDataFromApi(userBranches: any): Observable<any> {
    this.userModuleBody =  {
      documentelement: {
        RowID: [
          {
          useEmailId: userBranches.Email,
          UserName: userBranches.UserName,
          CompanyCode: userBranches.CompanyCode,
          spName: 'ng_BP_CMN_ACCESS_SP_Module'
          }
        ]
      }
     };
    return this.http.post<any>('http://10.133.18.18:14675/api/commonAPI', this.userModuleBody);
  }
}
