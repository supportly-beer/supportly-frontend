import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = "http://localhost:8080"

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getUser(): Observable<UserModel> {
    return this.httpClient.get<UserModel>(`${this.apiUrl}/user`, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }
}
