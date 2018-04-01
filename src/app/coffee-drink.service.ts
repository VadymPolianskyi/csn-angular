import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import { CoffeeDrink } from './coffee-drink/coffeeDrink';
import {of} from 'rxjs/observable/of';


@Injectable()
export class CoffeeDrinkService {

  constructor(private http: HttpClient) { }

  private coffeeDrinkURL = 'http://localhost:9000/coffe-drink';

  getAllCoffeeDrinks(): Observable<CoffeeDrink> {
    const url = `${this.coffeeDrinkURL}/all`;
    return this.http.get<CoffeeDrink[]>(url).pipe(
      tap(_ => console.log(`fetched all coffee drinks`)),
      catchError(this.handleError<CoffeeDrink>(`getCoffeeDrinks`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

}
