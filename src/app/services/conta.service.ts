
import { Injectable } from '@angular/core';
import {Conta} from '../models/conta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class ContaService {
    constructor (private http: HttpClient) { }
    
    private API_BASE_URL = environment.apiUrl + "conta";

    post(conta: Conta): Observable<Conta> {
        const headerOptions = new HttpHeaders({
          "Content-Type": "application/json"
        });
        console.log(conta);
        return this.http
          .post<Conta>(
            `${this.API_BASE_URL}/post`,
            conta,
            {
              headers: headerOptions
            }
          )
          .pipe(
            map(result => {
              return result;
            })
          );
      }

      get(): Observable<Conta[]> {    
        return this.http
          .get<Conta[]>(
            `${this.API_BASE_URL}/get`
          )
          .pipe(
            map(result => {
              return result;
            })
          );
      }
}