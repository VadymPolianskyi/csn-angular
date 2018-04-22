import {Component, Input, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];

  @Input() employee: Employee;
  @Input() newEmployee: Employee;

  ngOnInit() {
    this.getEmployees();
    this.employee = new Employee();
    this.newEmployee = new Employee();
  }

  constructor(
    private employeeService: EmployeeService
  ) {}

  setEmployee(employee: Employee) {
    this.employee = employee;
  }

  getEmployees(): void {
    this.employeeService.getAllEmployees()
      .subscribe(employees => this.employees = employees);
  }
}
