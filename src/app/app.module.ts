import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {CoffeeHouseService} from './coffee-house.service';
import { CoffeeHouseComponent } from './coffee-house/coffee-house.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoffeeHouseComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CoffeeHouseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
