import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoanComponent } from './loan/loan.component';
import { EduComponent } from './loan/edu/edu.component';
import { HomeComponent } from './loan/home/home.component';
import { PerComponent } from './loan/per/per.component';
import { GoldComponent } from './loan/gold/gold.component';
import { XYZComponent } from './loan/xyz/xyz.component';
import { GalaryComponent } from './galary/galary.component';
import { ABCComponent } from './abc/abc.component';
import { ErrorcompComponent } from './errorcomp/errorcomp.component';
import { EnrtypageComponent } from './enrtypage/enrtypage.component';
import { DeptComponent } from './dept/dept.component';
import { TestingComponent } from './dept/testing/testing.component';
import { DevComponent } from './dept/dev/dev.component';
import { HRComponent } from './dept/hr/hr.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoanComponent,
    EduComponent,
    HomeComponent,
    PerComponent,
    GoldComponent,
    XYZComponent,
    GalaryComponent,
    ABCComponent,
    ErrorcompComponent,
    EnrtypageComponent,
    DeptComponent,
    TestingComponent,
    DevComponent,
    HRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
