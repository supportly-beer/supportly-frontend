import {UserModel} from "../../models/user.model";
import {HttpErrorResponse} from "@angular/common/http";

export interface UserState {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  user: UserModel | null;
}
