import {RoleModel} from "./role.model";

export class UserModel {
  constructor(
    public id: number,
    public email: string,
    public firstName: string,
    public lastName: string,
    public profilePictureUrl: string,
    public twofaEnabled: boolean,
    public role: RoleModel
  ) {
  }
}
