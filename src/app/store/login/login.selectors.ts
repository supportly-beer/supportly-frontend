import {AppState} from "../appState.interface";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state: AppState) => state.login;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
