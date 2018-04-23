import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoffeeHouseComponent} from './coffee-house/coffee-house.component';
import {MainComponent} from './main/main.component';
import {CoffeeHousesMainComponent} from './coffee-houses-main/coffee-houses-main.component';
import {CoffeeDrinkComponent} from './coffee-drink/coffee-drink.component';
import {EmployeeComponent} from './employee/employee.component';
import {ContractComponent} from './contract/contract.component';
import {PositionComponent} from './position/position.component';
import {ProductComponent} from './product/product.component';
import {SalesComponent} from './sales/sales.component';
import {FirstQueryComponent} from './first-query/first-query.component';
import {SecondQueryComponent} from './second-query/second-query.component';

const routes: Routes = [
  { path: 'coffee-houses', component: CoffeeHousesMainComponent },
  { path: 'coffee-house/:address', component: CoffeeHouseComponent },
  { path: 'coffee-drinks', component: CoffeeDrinkComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'contracts', component: ContractComponent },
  { path: 'positions', component: PositionComponent },
  { path: 'products', component: ProductComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'first', component: FirstQueryComponent },
  { path: 'second', component: SecondQueryComponent },
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
