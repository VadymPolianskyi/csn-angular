import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {Employee} from './employee/employee';
import {of} from 'rxjs/observable/of';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private employeeURL = 'http://localhost:9000/api/employees';

  getAllEmployees(): Observable<Employee[]> {
    const url = `${this.employeeURL}/all`;
    return this.http.get<Employee[]>(url).pipe(
      tap(_ => console.log(`fetched all employee`)),
      catchError(this.handleError<Employee[]>(`getEmployees`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
