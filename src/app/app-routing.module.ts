import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoffeeHouseComponent} from './coffee-house/coffee-house.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  { path: 'coffee-house/:address', component: CoffeeHouseComponent },
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
