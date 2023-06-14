import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {TokenModel} from "../models/token.model";
import {HttpClient} from "@angular/common/http";
import {OperationSuccessModel} from "../models/operationSuccess.model";
import {BACKEND_URL} from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  login(email: string, password: string): Observable<TokenModel> {
    return this.httpClient.post<TokenModel>(`${BACKEND_URL}/auth/login`, {
      email: email, password: password
    });
  }

  loginTwofa(email: string, code: string): Observable<TokenModel> {
    return this.httpClient.post<TokenModel>(`${BACKEND_URL}/auth/twofa`, {
      email: email, token: code
    }, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("twofaToken")}
    });
  }

  register(email: string, firstName: string, lastName: string, password: string): Observable<OperationSuccessModel> {
    return this.httpClient.post<OperationSuccessModel>(`${BACKEND_URL}/auth/register`, {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      profilePictureUrl: "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo="
    });
  }

  validateToken(token: string): Observable<OperationSuccessModel> {
    return this.httpClient.get<OperationSuccessModel>(`${BACKEND_URL}/auth/validate`, {
      headers: {"Authorization": "Bearer " + token}
    })
  }

  validateEmail(token: string, email: string): Observable<OperationSuccessModel> {
    return this.httpClient.post<OperationSuccessModel>(`${BACKEND_URL}/auth/validate-email?token=${token}&email=${email}`, {});
  }
}
