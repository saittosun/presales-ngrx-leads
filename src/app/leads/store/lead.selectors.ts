import { createSelector } from '@ngrx/store';

import { AppState, LeadsState } from './leads.types';

export const LEADS_ROOT_SELECTOR = (state: AppState) => state.customers;

export const LEADS_LOADING = createSelector(
  LEADS_ROOT_SELECTOR,
  (state: LeadsState) => state.list.loading,
);

export const LEADS_ERROR = createSelector(
  LEADS_ROOT_SELECTOR,
  (state: LeadsState) => state.list.error,
);

export const LEAD_UPDATE = createSelector(
  LEADS_ROOT_SELECTOR,
  (state: LeadsState) => state.list.results
)

export const LEAD_ADD = createSelector(
  LEADS_ROOT_SELECTOR,
  (state: LeadsState) => state.list.results
)
