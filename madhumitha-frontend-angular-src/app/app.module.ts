import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule for routing

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { EmployeeRegistrationComponent } from './employeeregistration/employeeregistration.component';
import { HttpClientModule } from '@angular/common/http';

// Define your application routes
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'employee-registration', component: EmployeeRegistrationComponent },
  { path: 'employee-view', component: EmployeeViewComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Default route
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainMenuComponent,
    EmployeeViewComponent,
    EmployeeRegistrationComponent // Ensure this is declared
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, // Add FormsModule here
    RouterModule.forRoot(appRoutes) // Use RouterModule with defined routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
