import { Component } from '@angular/core';
import { Address, Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrls: ['./employeeregistration.component.css']
})
export class EmployeeRegistrationComponent {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService) { }

  addAddress() {
    this.employee.addresses.push(new Address());
  }

  removeAddress(index: number) {
    this.employee.addresses.splice(index, 1);
  }

  registerEmployee() {
    this.employeeService.registerEmployee(this.employee).subscribe(response => {
      console.log('Employee registered successfully', response);
    });
  }
}
