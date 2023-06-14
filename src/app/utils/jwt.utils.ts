import {JwtHelperService} from "@auth0/angular-jwt";

export class JwtUtils {

  jwtHelperService = new JwtHelperService();

  constructor(
    public token: string
  ) {
  }

  decode(): { id: number, type: string, sub: string, iat: number, exp: number } | undefined {
    try {
      return JSON.parse(atob(this.token.split('.')[1]));
    } catch (error) {
      return undefined;
    }
  }

  isExpired(): boolean {
    return this.jwtHelperService.isTokenExpired(this.token)
  }
}
