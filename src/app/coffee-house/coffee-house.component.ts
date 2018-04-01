import {Component, Input, OnInit} from '@angular/core';
import {CoffeeHouseService} from '../coffee-house.service';
import {ActivatedRoute} from '@angular/router';
import {CoffeeHouse} from './coffeeHouse';
import { Location } from '@angular/common';

@Component({
  selector: 'app-coffee-house',
  templateUrl: './coffee-house.component.html',
  styleUrls: ['./coffee-house.component.css']
})
export class CoffeeHouseComponent implements OnInit {

  @Input() coffeeHouse: CoffeeHouse;

  ngOnInit() {
    this.getCoffeeHouse();
  }

  constructor(
    private route: ActivatedRoute,
    private coffeeHouseService: CoffeeHouseService,
    private location: Location
  ) {}

  getCoffeeHouse(): void {
    const address = this.route.snapshot.paramMap.get('address');
    this.coffeeHouseService.getCoffeeHouse(address)
      .subscribe(coffeeHouse => this.coffeeHouse = coffeeHouse);
  }

  goBack() {
    this.location.back();
  }

  update(): void {
    this.coffeeHouseService.updateCoffeeHouse(this.coffeeHouse)
      .subscribe(() => this.goBack());
  }

}
