import {SearchState} from "./searchState.interface";
import {createReducer, on} from "@ngrx/store";
import * as SearchActions from "./search.actions";

export const initialState: SearchState = {
  isLoading: false,
  query: null,
  limit: null,
  error: null,
  searchResult: null,
}

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.getResults, (state, {query, limit}) => ({
    ...state,
    isLoading: true,
    query: query,
    limit: limit
  })),
  on(SearchActions.getResultsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    searchResult: action.searchResult
  })),
  on(SearchActions.getResultsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  }))
)
