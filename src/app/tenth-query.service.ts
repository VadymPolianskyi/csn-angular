import { Injectable } from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {AnswerTenth} from './tenth-query/answer.tenth';
import {of} from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TenthQueryService {

  private queryURL = 'http://localhost:9000/api/queries/tenth';
  constructor(private http: HttpClient) { }

  getAllAnswerTenths(address: string, fromDate: number): Observable<AnswerTenth[]> {
    const url = `${this.queryURL}?address=${address}&fromDate=${fromDate}`;
    return this.http.get<AnswerTenth[]>(url).pipe(
      tap(_ => console.log(`fetched all answers tenth`)),
      catchError(this.handleError<AnswerTenth[]>(`getAllAnswerTenths`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

}
