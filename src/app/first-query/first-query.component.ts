import {Component, Input, OnInit} from '@angular/core';
import {AnswerFirst} from '../first-query/answer.first';
import {FirstQueryService} from '../first-query.service';
import {CoffeeHouseService} from '../coffee-house.service';
import {Product} from '../coffee-drink/coffeeDrink';
import {CoffeeDrinkService} from '../coffee-drink.service';

@Component({
  selector: 'app-first-query',
  templateUrl: './first-query.component.html',
  styleUrls: ['./first-query.component.css']
})
export class FirstQueryComponent implements OnInit {


  answerFirsts: AnswerFirst[];

  address: string;
  addresses: string[];

  products: Product[];
  productName: string;

  ngOnInit() {
    this.getAnswerFirsts();
    this.getAddresses();
    this.getProducts();
    this.address = 'Оберіть адресу';
    this.productName = 'Оберіть назву';
  }

  constructor(
    private answerFirstService: FirstQueryService,
    private coffeeHouseService: CoffeeHouseService,
    private coffeeDrinkService: CoffeeDrinkService

  ) {}

  getAnswerFirsts(): void {
    this.answerFirstService.getAllAnswerFirsts(this.address, this.productName)
      .subscribe(answerFirsts => this.answerFirsts = answerFirsts);
  }
  getAddresses(): void {
    this.coffeeHouseService.getAddresses()
      .subscribe(addresses => this.addresses = addresses);
  }

  getProducts(): void {
    this.coffeeDrinkService.getAllProducts()
      .subscribe(products => this.products = products);
  }
}
