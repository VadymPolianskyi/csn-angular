import { Injectable } from '@angular/core';
import { CoffeeHouse } from './coffee-house/coffeeHouse';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CoffeeHouseService {

  constructor(private http: HttpClient) { }

  private coffeeHouseURL = 'http://localhost:9000/coffe-houses';


  getCoffeeHouse(address: string): Observable<CoffeeHouse> {
    const url = `${this.coffeeHouseURL}/${address}`;
    return this.http.get<CoffeeHouse>(url).pipe(
      tap(_ => console.log(`fetched coffee house address=${address}`)),
      catchError(this.handleError<CoffeeHouse>(`getCoffeeHouse address=${address}`))
    );
  }

  getAddresses(): Observable<string[]> {
    const url = `${this.coffeeHouseURL}/addresses`;
    return this.http.get<string[]>(url).pipe(
      tap(_ => console.log(`fetched coffee house addresses`)),
      catchError(this.handleError<string[]>(`getAddresses`))
    );
  }

  createCoffeeHouse (coffeeHouse: CoffeeHouse): Observable<any> {
    coffeeHouse.space = parseFloat(String(coffeeHouse.space));
    coffeeHouse.rentalPrice = parseFloat(String(coffeeHouse.rentalPrice));

    const url = `${this.coffeeHouseURL}/create`;
    return this.http.post(url, coffeeHouse, httpOptions).pipe(
      tap(_ => console.log(`create coffee house address=${coffeeHouse.address}`)),
      catchError(this.handleError<any>('createCoffeeHouse'))
    );
  }

  updateCoffeeHouse (coffeeHouse: CoffeeHouse): Observable<any> {
    coffeeHouse.space = parseFloat(String(coffeeHouse.space));
    coffeeHouse.rentalPrice = parseFloat(String(coffeeHouse.rentalPrice));

    const url = `${this.coffeeHouseURL}/${coffeeHouse.address}`;
    return this.http.put(url, coffeeHouse, httpOptions).pipe(
      tap(_ => console.log(`update coffee house address=${coffeeHouse.address}`)),
      catchError(this.handleError<any>('updateCoffeeHouse'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }


}
