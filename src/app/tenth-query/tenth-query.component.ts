import { Component, OnInit } from '@angular/core';
import {TenthQueryService} from '../tenth-query.service';
import {Employee} from '../employee/employee';
import {AnswerTenth} from '../tenth-query/answer.tenth';
import {EmployeeService} from '../employee.service';
import {CoffeeHouseService} from '../coffee-house.service';

@Component({
  selector: 'app-tenth-query',
  templateUrl: './tenth-query.component.html',
  styleUrls: ['./tenth-query.component.css']
})
export class TenthQueryComponent implements OnInit {

  answerTenths: AnswerTenth[];

  address: string;
  addresses: string[];

  fromDate: Date = new Date();

  ngOnInit() {
    this.getAnswerTenths();
    this.getAddresses();
    this.address = 'Оберіть адресу';
  }

  constructor(
    private answerTenthService: TenthQueryService,
    private coffeeHouseService: CoffeeHouseService,
  ) {}

  getAnswerTenths(): void {
    this.answerTenthService.getAllAnswerTenths(this.address, new Date(this.fromDate).getTime() / 1000)
      .subscribe(answerTenths => this.answerTenths = answerTenths);
  }


  getAddresses(): void {
    this.coffeeHouseService.getAddresses()
      .subscribe(addresses => this.addresses = addresses);
  }

}
