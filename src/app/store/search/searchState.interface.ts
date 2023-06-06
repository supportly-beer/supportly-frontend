import {HttpErrorResponse} from "@angular/common/http";
import {SearchResultModel} from "../../models/searchResult.model";

export interface SearchState {
  isLoading: boolean;
  query: string | null;
  limit: number | null;
  error: HttpErrorResponse | null;
  searchResult: SearchResultModel | null;
}
