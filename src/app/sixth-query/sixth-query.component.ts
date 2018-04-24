import { Component, OnInit } from '@angular/core';
import {AnswerSixth} from './answer.sixth';
import {SixthQueryService} from '../sixth-query.service';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee/employee';

@Component({
  selector: 'app-sixth-query',
  templateUrl: './sixth-query.component.html',
  styleUrls: ['./sixth-query.component.css']
})
export class SixthQueryComponent implements OnInit {

  answerSixths: AnswerSixth[];

  employee: string;
  employees: Employee[];

  saleDate: Date = new Date();

  ngOnInit() {
    this.getAnswerSixths();
    this.getEmployees();
    this.employee = 'Оберіть працівника';
  }

  constructor(
    private answerSixthService: SixthQueryService,
    private employeeService: EmployeeService,

  ) {}

  getAnswerSixths(): void {
    this.answerSixthService.getAllAnswerSixths(this.employee, new Date(this.saleDate).getTime() / 1000)
      .subscribe(answerSixths => this.answerSixths = answerSixths);
  }
  getEmployees(): void {
    this.employeeService.getAllEmployees()
      .subscribe(employees => this.employees = employees);
  }

}
