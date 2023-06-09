import {AppState} from "../appState.interface";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state: AppState) => state.stats;

export const statsIsLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const statsErrorSelector = createSelector(selectFeature, (state) => state.error);
export const statsSelector = createSelector(selectFeature, (state) => state.statsResult);
