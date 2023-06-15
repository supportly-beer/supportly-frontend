import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getUser(): Observable<UserModel> {
    return this.httpClient.get<UserModel>(`${BACKEND_URL}/user`, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }
}
