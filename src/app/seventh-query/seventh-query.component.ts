import { Component, OnInit } from '@angular/core';
import {SeventhQueryService} from '../seventh-query.service';
import {AnswerSeventh} from './answer.seventh';
import {CoffeeHouseService} from '../coffee-house.service';

@Component({
  selector: 'app-seventh-query',
  templateUrl: './seventh-query.component.html',
  styleUrls: ['./seventh-query.component.css']
})
export class SeventhQueryComponent implements OnInit {

  answerSevenths: AnswerSeventh[];

  avgSalary: string;

  address: string;
  addresses: string[];


  ngOnInit() {
    this.getAnswerSevenths();
    this.getAddresses();
    this.address = 'Оберіть адресу';
    this.avgSalary = '0';
  }

  constructor(
    private answerSeventhService: SeventhQueryService,
    private coffeeHouseService: CoffeeHouseService,

  ) {}

  getAnswerSevenths(): void {
    this.answerSeventhService.getAllAnswerSevenths(this.address, +this.avgSalary)
      .subscribe(answerSevenths => this.answerSevenths = answerSevenths);
  }
  getAddresses(): void {
    this.coffeeHouseService.getAddresses()
      .subscribe(addresses => this.addresses = addresses);
  }

}
