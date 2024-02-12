import { Injectable } from '@angular/core';
import { Address } from '../address';
import { Request } from '../request';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl = 'http://localhost:8080/api/v1/address'
  constructor(private http:HttpClient) { }

  postAddress(request: Request): Observable<Address | null> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Address>(this.apiUrl, request, { headers })
      .pipe(
        catchError(error => {
          // Handle 404 response
          if (error.status === 404) {
            return of(null);
          }
          // Handle other errors
          return throwError(() => new Error('Something went wrong'));
        })
      );
  }
}
