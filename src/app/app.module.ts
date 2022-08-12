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
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorcompComponent } from './errorcomp/errorcomp.component';
import { EnrtypageComponent } from './enrtypage/enrtypage.component';
import { DeptComponent } from './dept/dept.component';
import { TestingComponent } from './dept/testing/testing.component';
import { DevComponent } from './dept/dev/dev.component';
import { HRComponent } from './dept/hr/hr.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule  } from '@angular/forms';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { SqrPipe } from './sqr.pipe';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { A1Component } from './a1/a1.component';
import { B1Component } from './b1/b1.component';
import { C1Component } from './c1/c1.component';
import { D1Component } from './d1/d1.component';
import { SeethaComponent } from './seetha/seetha.component';
import { RamaComponent } from './rama/rama.component';
import { RavanaComponent } from './ravana/ravana.component';
import { FormsdemoComponent } from './formsdemo/formsdemo.component';
import { ReactivedrivenformComponent } from './reactivedrivenform/reactivedrivenform.component';
import { Lch1Component } from './lch1/lch1.component';
import { Lch2Component } from './lch2/lch2.component';
import { LifecycledemoComponent } from './lifecycledemo/lifecycledemo.component';


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
    HRComponent,
    DatabindingComponent,
    DirectivedemoComponent,
    SqrPipe,
    PipedemoComponent,
    A1Component,
    B1Component,
    C1Component,
    D1Component,
    SeethaComponent,
    RamaComponent,
    RavanaComponent,
    FormsdemoComponent,
    ReactivedrivenformComponent,
    Lch1Component,
    Lch2Component,
    LifecycledemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
