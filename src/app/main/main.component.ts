import { Component, OnInit } from '@angular/core';
import {CoffeeHouseService} from '../coffee-house.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  addresses: string[];

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

}
