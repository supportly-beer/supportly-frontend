import {UserModel} from "../../models/user.model";
import {HttpErrorResponse} from "@angular/common/http";
import {UserRoleEnum} from "../../models/userRole.enum";

export interface UserState {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  user: UserModel | null;
  twofaQrCode: string | null;
  avatar: File | null;
  firstName: string | null,
  lastName: string | null,
  password: string | null,
  page: number,
  count: number,
  users: UserModel[] | null,
  id: number,
  role: UserRoleEnum | null
}
