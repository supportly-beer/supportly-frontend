import {AppState} from "../appState.interface";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state: AppState) => state.search;

export const searchIsLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const searchErrorSelector = createSelector(selectFeature, (state) => state.error);
export const searchSelector = createSelector(selectFeature, (state) => state.searchResult);
