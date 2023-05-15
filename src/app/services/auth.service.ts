import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {TokenModel} from "../models/token.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = "http://localhost:8080"

  constructor(
    private httpClient: HttpClient
  ) { }

  login(email: string, password: string): Observable<TokenModel> {
    return this.httpClient.post<TokenModel>(`${this.apiUrl}/auth/login`, {
      email: email, password: password
    });
  }
}
