import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../app.config";
import {TwofaEnabledModel} from "../models/twofaEnabled.model";
import {OperationSuccessModel} from "../models/operationSuccess.model";
import {UserRoleEnum} from "../models/userRole.enum";

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

  enableTwofa(): Observable<TwofaEnabledModel> {
    return this.httpClient.post<TwofaEnabledModel>(`${BACKEND_URL}/user/enableTwofa`, {}, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }

  disableTwofa(): Observable<OperationSuccessModel> {
    return this.httpClient.post<OperationSuccessModel>(`${BACKEND_URL}/user/disableTwofa`, {}, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }

  uploadAvatar(avatar: File) {
    let formData = new FormData()
    formData.append("profilePicture", avatar)

    return this.httpClient.post<OperationSuccessModel>(`${BACKEND_URL}/user/upload`, formData, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }

  updateUser(firstName: string | null, lastName: string | null, password: string | null): Observable<OperationSuccessModel> {
    return this.httpClient.post<OperationSuccessModel>(`${BACKEND_URL}/user/update`, {
      firstName: firstName,
      lastName: lastName,
      password: password
    }, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }

  getAllUsers(page: number, count: number): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(`${BACKEND_URL}/user/all?start=${page}&limit=${count}`, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }

  updateRole(id: number, role: UserRoleEnum): Observable<OperationSuccessModel> {
    return this.httpClient.post<OperationSuccessModel>(`${BACKEND_URL}/user/updateRole`, {
      userId: id,
      role: role
    }, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }
}
