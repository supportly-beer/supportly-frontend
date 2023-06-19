import {StatsState} from "./statsState.interface";
import {createReducer, on} from "@ngrx/store";
import * as StatsActions from "./stats.actions";

export const initialState: StatsState = {
  isLoading: false,
  error: null,
  start: null,
  end: null,
  statsResult: null,
}

export const statsReducer = createReducer(
  initialState,
  on(StatsActions.fetchStats, (state, {start, end}) => ({
    ...state,
    isLoading: true,
    start: start,
    end: end
  })),
  on(StatsActions.fetchStatsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    statsResult: action.statsResult
  })),
  on(StatsActions.fetchStatsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  }))
)
