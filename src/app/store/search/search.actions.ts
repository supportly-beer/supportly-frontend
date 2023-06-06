import {createAction, props} from "@ngrx/store";
import {HttpErrorResponse} from "@angular/common/http";
import {SearchResultModel} from "../../models/searchResult.model";

export const getResults = createAction("[Search] Get Results", props<{ query: string, limit: number }>());
export const getResultsSuccess = createAction("[Search] Get Results Success", props<{
  searchResult: SearchResultModel | null
}>());
export const getResultsFailure = createAction("[Search] Get Results Failure", props<{
  error: HttpErrorResponse | null
}>());
