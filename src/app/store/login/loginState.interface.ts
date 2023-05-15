import {HttpErrorResponse} from "@angular/common/http";

export interface LoginState {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  email: string | null;
  password: string | null;
}
