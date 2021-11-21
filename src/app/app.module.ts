import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { AppheaderComponent } from './component/appheader/appheader.component';
import { AppsettingComponent } from './component/appsetting/appsetting.component';
import { AppmenuComponent } from './component/appmenu/appmenu.component';
import { AppfooterComponent } from './component/appfooter/appfooter.component';
import {SocialLoginModule,AuthServiceConfig, GoogleLoginProvider} from 'angular-6-social-login';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserbranchesComponent } from './component/userbranches/userbranches.component';
import { LoaderService } from './loader.service';
import { UsermodulesComponent } from './component/usermodules/usermodules.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './loader.interceptor';
import { CreateCustomerComponent } from './component/create-customer/create-customer.component';
// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('586140943572-jth7jho7isasj1i3bph8jjfjr68dhavq.apps.googleusercontent.com')
        }
      ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    routingComponents,
    AppheaderComponent,
    AppsettingComponent,
    AppmenuComponent,
    AppfooterComponent,
    UserbranchesComponent,
    UsermodulesComponent,
    LoaderComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [
    LoaderService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
