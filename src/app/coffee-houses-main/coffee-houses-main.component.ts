import {Component, Input, OnInit} from '@angular/core';
import {CoffeeHouseService} from '../coffee-house.service';
import {CoffeeHouse} from '../coffee-house/coffeeHouse';


@Component({
  selector: 'app-coffee-houses-main',
  templateUrl: './coffee-houses-main.component.html',
  styleUrls: ['./coffee-houses-main.component.css']
})
export class CoffeeHousesMainComponent implements OnInit {
  addresses: string[];

  @Input() coffeeHouse: CoffeeHouse = {
    address: '',
    space: 0.0,
    rentalPrice: 0.0,
    mobileNumber: ''
  };

  constructor(
    private coffeeHouseService: CoffeeHouseService
  ) {}

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses(): void {
    this.coffeeHouseService.getAddresses()
      .subscribe(addresses => this.addresses = addresses);
  }

  create(): void {
    this.coffeeHouseService.createCoffeeHouse(this.coffeeHouse)
      .subscribe(() => this.coffeeHouse = {
        address: '',
        space: 0.0,
        rentalPrice: 0.0,
        mobileNumber: ''
      });
  }
}
