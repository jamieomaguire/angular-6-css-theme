import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IBrandTheme } from './models/IBrandTheme';

@Injectable({
  providedIn: 'root'
})
export class BrandThemeService {
  private brandThemeUrl: string = '/src/api/brand-theme.json';

  constructor(private http: HttpClient) { }

  getBrandTheme(): Observable<IBrandTheme> {
    return this.http.get<IBrandTheme>(this.brandThemeUrl).pipe(
      tap(data => console.log(`Brand Theme Loaded: ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
