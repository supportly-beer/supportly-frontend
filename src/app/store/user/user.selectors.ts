import {AppState} from "../appState.interface";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state: AppState) => state.user;

export const userIsLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const userErrorSelector = createSelector(selectFeature, (state) => state.error);
export const userSelector = createSelector(selectFeature, (state) => state.user);
export const allUsersSelector = createSelector(selectFeature, (state) => state.users);
export const twofaQrCodeSelector = createSelector(selectFeature, (state) => state.twofaQrCode);
