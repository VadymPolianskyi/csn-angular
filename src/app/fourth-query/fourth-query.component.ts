import { Component, OnInit } from '@angular/core';
import {FourthQueryService} from '../fourth-query.service';
import {CoffeeHouseService} from '../coffee-house.service';
import {AnswerFourth} from '../fourth-query/answer.fourth';
import {CoffeeDrinkService} from '../coffee-drink.service';
import {CoffeeDrink} from '../coffee-drink/coffeeDrink';

@Component({
  selector: 'app-fourth-query',
  templateUrl: './fourth-query.component.html',
  styleUrls: ['./fourth-query.component.css']
})
export class FourthQueryComponent implements OnInit {

  answerFourths: AnswerFourth[];

  coffeeDrink: string;
  coffeeDrinks: CoffeeDrink[];

  saleDate: Date = new Date();

  ngOnInit() {
    this.getAnswerFourths();
    this.getCoffeeDrinks();
    this.coffeeDrink = 'Оберіть напій';
  }

  constructor(
    private answerFourthService: FourthQueryService,
    private coffeeDrinkService: CoffeeDrinkService,

  ) {}

  getAnswerFourths(): void {
    this.answerFourthService.getAllAnswerFourths(this.coffeeDrink, new Date(this.saleDate).getTime() / 1000 * -1)
      .subscribe(answerFourths => this.answerFourths = answerFourths);
  }
  getCoffeeDrinks(): void {
    this.coffeeDrinkService.getAllCoffeeDrinks()
      .subscribe(coffeeDrinks => this.coffeeDrinks = coffeeDrinks);
  }

}
