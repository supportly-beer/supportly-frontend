export class OperationSuccessModel {
  constructor(
    public successful: boolean,
    public error: string | null
  ) {
  }
}
