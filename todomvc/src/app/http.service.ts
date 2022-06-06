import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url =
    'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.url);
  }

  extractData(res: Response) {
    throw new Error('Method not implemented.');
  }

  options = {
    observe: 'response' as 'response',
    responseType: 'text',
  };

  getMt() {
    // return this.http.get(this.url).pipe(map(r => r.json()));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        'Backend returned code ${error.status}, body was: ',
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
