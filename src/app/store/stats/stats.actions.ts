import {createAction, props} from "@ngrx/store";
import {HttpErrorResponse} from "@angular/common/http";
import {StatsResultModel} from "../../models/statsResult.model";

export const fetchStats = createAction("[Stats] Fetch Stats", props<{ start: number, end: number }>());
export const fetchStatsSuccess = createAction("[Stats] Fetch Stats Success", props<{
  statsResult: StatsResultModel | null
}>())
export const fetchStatsFailure = createAction("[Stats] Fetch Stats Failure", props<{
  error: HttpErrorResponse | null
}>());
