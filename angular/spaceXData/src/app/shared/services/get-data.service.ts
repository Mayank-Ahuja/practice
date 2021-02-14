import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getProgramData(dataApiParams): Observable<Object>{
    let requestUrl = '';
    if(dataApiParams){
      requestUrl = `https://api.spaceXdata.com/v3/launches?limit=50&${dataApiParams}`
    }else{
      requestUrl = `https://api.spaceXdata.com/v3/launches?limit=50`
    }
    return this.http.get(requestUrl).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error:', error.error.message);
    } else {
      console.error(`Error code ${error.status}, Error Message: ${error.error}`);
    }
    return throwError('Something error occured; please try again later.');
  }

}
