import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DeptComponent } from './dept/dept.component';
import { TestingComponent } from './dept/testing/testing.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { EnrtypageComponent } from './enrtypage/enrtypage.component';
import { ErrorcompComponent } from './errorcomp/errorcomp.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'pipe',component:PipedemoComponent
  },
  {
    path:"signup",
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dept',
    component:DeptComponent,
    children: [{
      path:'test',component:TestingComponent
    }  ]
  },
  {
    path:'databind',
    component:DatabindingComponent
  },
  {
    path:'dirdemo',
    component:DirectivedemoComponent
  },
  {
    path:'zzzzzzzzz',
    component:EnrtypageComponent
  },
  {
    path:"mmm",
    redirectTo: 'home'
  }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
