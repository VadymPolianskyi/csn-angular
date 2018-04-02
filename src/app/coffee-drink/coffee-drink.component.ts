import {Component, OnInit} from '@angular/core';
import {CoffeeDrink, Product, SelectObject} from './coffeeDrink';
import {CoffeeDrinkService} from '../coffee-drink.service';

@Component({
  selector: 'app-coffee-drink',
  templateUrl: './coffee-drink.component.html',
  styleUrls: ['./coffee-drink.component.css']
})
export class CoffeeDrinkComponent implements OnInit {

  coffeeDrinks: CoffeeDrink[];

  products: Product[];

  options: SelectObject[] = [];

  config = {
    labelField: 'label',
    valueField: 'value',
    highlight: false,
    create: false,
    persist: true,
    plugins: ['dropdown_direction', 'remove_button'],
    dropdownDirection: 'down',
    maxItems: 15
  };
  placeholder = 'Products';
  values: string[] = [];

  ngOnInit() {
    this.getCoffeeDrinks();

    this.getProducts();
  }

  constructor(
    private coffeeDrinkService: CoffeeDrinkService
  ) {}

  getCoffeeDrinks(): void {
    this.coffeeDrinkService.getAllCoffeeDrinks()
      .subscribe(coffeeDrinks => this.coffeeDrinks = coffeeDrinks);
  }

  getProducts(): void {
    this.coffeeDrinkService.getAllProducts()
      .subscribe(products => this.setValues(products));
  }

  setValues(products: Product[]): void {
    this.products = products;
    this.products.forEach(p => this.options.push(
      {
        label: p.name,
        value: p.name
      }
    ));
  }

  onValueChange($event) {
    console.log('Option changed: ', $event);
  }
}
