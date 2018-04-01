import {Component, Input, OnInit} from '@angular/core';
import {CoffeeDrink} from './coffeeDrink';
import {CoffeeDrinkService} from '../coffee-drink.service';

@Component({
  selector: 'app-coffee-drink',
  templateUrl: './coffee-drink.component.html',
  styleUrls: ['./coffee-drink.component.css']
})
export class CoffeeDrinkComponent implements OnInit {

  coffeeDrinks: CoffeeDrink[];

  ngOnInit() {
    this.getCoffeeDrinks();
  }

  constructor(
    private coffeeDrinkService: CoffeeDrinkService
  ) {}

  getCoffeeDrinks(): void {
    this.coffeeDrinkService.getAllCoffeeDrinks()
      .subscribe(coffeeDrinks => this.coffeeDrinks = coffeeDrinks);
  }

}
