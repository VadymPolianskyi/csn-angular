import {Component, Input, OnInit} from '@angular/core';
import {CoffeeHouseService} from '../coffee-house.service';
import {CoffeeHouse} from '../coffee-house/coffeeHouse';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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
