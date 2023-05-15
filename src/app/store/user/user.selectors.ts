import {AppState} from "../appState.interface";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state: AppState) => state.user;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
export const userSelector = createSelector(selectFeature, (state) => state.user);
