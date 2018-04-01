import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {CoffeeHouseService} from './coffee-house.service';
import { CoffeeHouseComponent } from './coffee-house/coffee-house.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { CoffeeDrinkComponent } from './coffee-drink/coffee-drink.component';
import {CoffeeDrinkService} from './coffee-drink.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoffeeHouseComponent,
    MainComponent,
    CoffeeDrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CoffeeHouseService,
    CoffeeDrinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
