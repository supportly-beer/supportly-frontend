import {HttpErrorResponse} from "@angular/common/http";
import {StatsResultModel} from "../../models/statsResult.model";

export interface StatsState {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  start: number | null;
  end: number | null;
  statsResult: StatsResultModel | null;
}
