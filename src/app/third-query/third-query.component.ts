import { Component, OnInit } from '@angular/core';
import {PositionService} from '../position.service';
import {Position} from '../position/position';
import {ThirdQueryService} from '../third-query.service';
import {AnswerThird} from './answer.third';
import {CoffeeHouseService} from '../coffee-house.service';

@Component({
  selector: 'app-third-query',
  templateUrl: './third-query.component.html',
  styleUrls: ['./third-query.component.css']
})
export class ThirdQueryComponent implements OnInit {

  answerThirds: AnswerThird[];

  address: string;
  addresses: string[];

  saleDate: Date = new Date();

  ngOnInit() {
    this.getAnswerThirds();
    this.getAddresses();
    this.address = 'Оберіть адресу';
  }

  constructor(
    private answerThirdService: ThirdQueryService,
    private coffeeHouseService: CoffeeHouseService,

  ) {}

  getAnswerThirds(): void {
    this.answerThirdService.getAllAnswerThirds(this.address, new Date(this.saleDate).getTime() / 1000 * -1)
      .subscribe(answerThirds => this.answerThirds = answerThirds);
  }
  getAddresses(): void {
    this.coffeeHouseService.getAddresses()
      .subscribe(addresses => this.addresses = addresses);
  }
}
