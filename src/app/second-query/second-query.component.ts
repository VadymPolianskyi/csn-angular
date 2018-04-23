import { Component, OnInit } from '@angular/core';
import {SecondQueryService} from '../second-query.service';
import {CoffeeHouseService} from '../coffee-house.service';
import {AnswerSecond} from './answer.second';
import {Position} from '../position/position';
import {PositionService} from '../position.service';

@Component({
  selector: 'app-second-query',
  templateUrl: './second-query.component.html',
  styleUrls: ['./second-query.component.css']
})
export class SecondQueryComponent implements OnInit {
  answerSeconds: AnswerSecond[];

  address: string;
  addresses: string[];

  positions: Position[];
  positionName: string;

  startDate: Date = new Date();

  ngOnInit() {
    this.getAnswerSeconds();
    this.getAddresses();
    this.getPositions();
    this.address = 'Оберіть адресу';
    this.positionName = 'Оберіть назву';
  }

  constructor(
    private answerSecondService: SecondQueryService,
    private coffeeHouseService: CoffeeHouseService,
    private positionService: PositionService

  ) {}

  getAnswerSeconds(): void {
    this.answerSecondService.getAllAnswerSeconds(this.address, this.positionName, new Date(this.startDate).getTime() / 1000 * -1)
      .subscribe(answerSeconds => this.answerSeconds = answerSeconds);
  }
  getAddresses(): void {
    this.coffeeHouseService.getAddresses()
      .subscribe(addresses => this.addresses = addresses);
  }

  getPositions(): void {
    this.positionService.getAllPositions()
      .subscribe(positions => this.positions = positions);
  }
}
