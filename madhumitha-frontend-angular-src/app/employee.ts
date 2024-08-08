export class Employee {
    id?: number;
    employeeId: string='';
    employeeName: string='';
    employeePhone: string='';
    employeeDesignation: string='';
    addresses: Address[] = [];
  }
  
  export class Address {
    id?: number;
    city: string='';
    state: string='';
  }
  