import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoffeeHouseComponent} from './coffee-house/coffee-house.component';
import {MainComponent} from './main/main.component';
import {CoffeeHousesMainComponent} from './coffee-houses-main/coffee-houses-main.component';
import {CoffeeDrinkComponent} from './coffee-drink/coffee-drink.component';

const routes: Routes = [
  { path: 'coffee-houses', component: CoffeeHousesMainComponent },
  { path: 'coffee-house/:address', component: CoffeeHouseComponent },
  { path: 'coffee-drinks', component: CoffeeDrinkComponent },
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
