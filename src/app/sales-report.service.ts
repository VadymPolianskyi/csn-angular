import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {SalesReport} from './sales/sales.report';

@Injectable()
export class SalesReportService {

  constructor(private http: HttpClient) { }

  private salesURL = 'http://localhost:9000/api/salesReports';

  getAllSalesReports(): Observable<SalesReport[]> {
    const url = `${this.salesURL}/all`;
    return this.http.get<SalesReport[]>(url).pipe(
      tap(_ => console.log(`fetched all sales`)),
      catchError(this.handleError<SalesReport[]>(`getSalesReports`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

}
