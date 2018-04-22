import {CoffeeDrink} from '../coffee-drink/coffeeDrink';
import {Employee} from '../employee/employee';
import {CoffeeHouse} from '../coffee-house/coffeeHouse';

export class SalesReport {
  coffeeDrink: CoffeeDrink;
  employee: Employee;
  priceWithVat: number;
  saleDate: number;
  coffeeHouse: CoffeeHouse;
}
