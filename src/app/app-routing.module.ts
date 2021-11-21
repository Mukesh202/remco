import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AppheaderComponent } from './component/appheader/appheader.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AppmenuComponent } from './component/appmenu/appmenu.component';
import { UserbranchesComponent } from './component/userbranches/userbranches.component';
import { UsermodulesComponent } from './component/usermodules/usermodules.component';
import {CreateCustomerComponent} from './component/create-customer/create-customer.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'appHeader', component: AppheaderComponent},
  { path: 'appMenu', component: AppmenuComponent},
  { path: 'userBranches', component: UserbranchesComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'userModule', component: UsermodulesComponent},
  { path: 'createCustomer', component: CreateCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
// tslint:disable-next-line: max-line-length
export const routingComponents = [LoginComponent, AppheaderComponent, AppmenuComponent, DashboardComponent, UserbranchesComponent, UsermodulesComponent,CreateCustomerComponent]
