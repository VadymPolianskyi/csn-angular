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
import {NgSelectizeModule} from 'ng-selectize';
import { SalesComponent } from './sales/sales.component';
import { CoffeeHousesMainComponent } from './coffee-houses-main/coffee-houses-main.component';
import { EmployeeComponent } from './employee/employee.component';
import {EmployeeService} from './employee.service';
import { ContractComponent } from './contract/contract.component';
import {ContractService} from './contract.service';
import { PositionComponent } from './position/position.component';
import {PositionService} from './position.service';
import { ProductComponent } from './product/product.component';
import {ProductService} from './product.service';
import {SalesReportService} from './sales-report.service';
import { FirstQueryComponent } from './first-query/first-query.component';
import {FirstQueryService} from './first-query.service';
import { SecondQueryComponent } from './second-query/second-query.component';
import {SecondQueryService} from './second-query.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ThirdQueryComponent } from './third-query/third-query.component';
import {ThirdQueryService} from './third-query.service';
import { FourthQueryComponent } from './fourth-query/fourth-query.component';
import {FourthQueryService} from './fourth-query.service';
import { FifthQueryComponent } from './fifth-query/fifth-query.component';
import {FifthQueryService} from './fifth-query.service';
import { SixthQueryComponent } from './sixth-query/sixth-query.component';
import {SixthQueryService} from './sixth-query.service';
import { SeventhQueryComponent } from './seventh-query/seventh-query.component';
import {SeventhQueryService} from './seventh-query.service';
import { EightQueryComponent } from './eight-query/eight-query.component';
import {EightQueryService} from './eight-query.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoffeeHouseComponent,
    MainComponent,
    CoffeeDrinkComponent,
    SalesComponent,
    CoffeeHousesMainComponent,
    EmployeeComponent,
    ContractComponent,
    PositionComponent,
    ProductComponent,
    FirstQueryComponent,
    SecondQueryComponent,
    ThirdQueryComponent,
    FourthQueryComponent,
    FifthQueryComponent,
    SixthQueryComponent,
    SeventhQueryComponent,
    EightQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectizeModule
  ],
  providers: [
    CoffeeHouseService,
    CoffeeDrinkService,
    EmployeeService,
    ContractService,
    PositionService,
    ProductService,
    SalesReportService,
    FirstQueryService,
    SecondQueryService,
    ThirdQueryService,
    FourthQueryService,
    FifthQueryService,
    SixthQueryService,
    SeventhQueryService,
    EightQueryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
