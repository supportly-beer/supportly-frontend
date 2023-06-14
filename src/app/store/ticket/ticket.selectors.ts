import {AppState} from "../appState.interface";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state: AppState) => state.ticket;

export const ticketIsLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const ticketErrorSelector = createSelector(selectFeature, (state) => state.error);
export const ticketSelector = createSelector(selectFeature, (state) => state.ticket);
export const ticketsSelector = createSelector(selectFeature, (state) => state.tickets);
