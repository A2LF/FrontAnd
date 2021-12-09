import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { autentique } from '../models/autentique';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AutentiqueServiceService {
  url = 'https://api.autentique.com.br/v2/graphql';

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': 'Bearer 3011dbb1511123d9dda14e222326804b9401196a72b2b3d3ce4375910bad019e' })
  }
  saveAutentique(autentiqueService: autentique): Observable<autentique> {
    return this.httpClient.post<autentique>(this.url, JSON.stringify(autentiqueService), this.httpOptions)
      .pipe(
        retry(2),
        )
  }
}
