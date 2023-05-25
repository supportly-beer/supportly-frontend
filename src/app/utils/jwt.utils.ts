export class JwtUtils {

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
}
