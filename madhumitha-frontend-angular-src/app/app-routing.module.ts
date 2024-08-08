import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeRegistrationComponent } from './employeeregistration/employeeregistration.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'mainmenu', component: MainMenuComponent },
  { path: 'employeeregistration', component: EmployeeRegistrationComponent },
  { path: 'employeeview', component: EmployeeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
