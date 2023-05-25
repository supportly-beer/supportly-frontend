import {AppState} from "../appState.interface";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state: AppState) => state.login;

export const loginIsLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const loginErrorSelector = createSelector(selectFeature, (state) => state.error);
