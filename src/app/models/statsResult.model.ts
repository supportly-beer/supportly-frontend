export class StatsResultModel {
  constructor(
    public globalTicketsOpen: number,
    public yourTicketsOpen: number,
    public customerAccounts: number,
    public averageTimePerTicket: number
  ) {
  }
}
