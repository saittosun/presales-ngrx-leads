import { Lead } from './../../types/lead';
import { Action, createReducer, on } from "@ngrx/store";

import { Customer } from "~types/customer";
import {
  getCustomers,
  getCustomersFailed,
  getCustomersSuccess,
  setCustomers,
} from "./lead.actions";
import { CustomerListState } from "./leads.types";

export const CUSTOMER_INITIAL_STATE: CustomerListState = {
  results: [],
  loading: false,
  error: null
};

export const listReducer = createReducer(
  CUSTOMER_INITIAL_STATE as any,
  on(getCustomers, (actionState: CustomerListState) => ({
    ...actionState,
    loading: true,
    error: null
  })) as any,
  on(
    getCustomersSuccess,
    (state: CustomerListState, { results }: any) => ({
      ...state
    })
  ) as any,
  on(
    getCustomersFailed,
    (state: CustomerListState, { error }: any) => ({
      ...state,
      loading: false,
      error
    })
  ) as any,
  on(
    setCustomers,
    (state: CustomerListState, { customers }: {customers: Lead[]}) => ({
      ...state,
      results: customers,
      loading: false,
      error: null
    })
  ) as any,
);

function listReducerWrapper(state: CustomerListState, action: Action) {
  return listReducer(state, action);
}

export const customerReducers: any = {
  list: listReducerWrapper
  // detail: detailReducer,
};
