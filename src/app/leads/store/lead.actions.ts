import { createAction, props } from '@ngrx/store';

import { Customer } from '~types/customer';
import { Lead } from '~types/lead';

export enum CustomerActions {
  getCustomers = '[Customers]: get all customers',
  getCustomersSuccess = '[Customers]: get all customers success',
  getCustomersFailed = '[Customers]: get all customers failed',
  setCustomers = '[General]: set all customers',
  setCustomersSuccess = '[General]: set all customers success',
  setCustomersFailed = '[General]: set all customers failed',
}

export const getCustomers = createAction(CustomerActions.getCustomers);

export const getCustomersSuccess = createAction(
  CustomerActions.getCustomersSuccess,
  props<{ results: Lead[] }>()
);

export const getCustomersFailed = createAction(
  CustomerActions.getCustomersFailed,
  props<{ error: string }>()
);

// export const updateCustomer = createAction(
//   CustomerActions.updateCustomer,
//   props<{customer: Partial<Lead>, id: number}>()
// )

// export const updateCustomerSuccess = createAction(
//   CustomerActions.updateCustomerSuccess,
//   props<{ customer: Lead }>()
// );

// export const updateCustomerFailed = createAction(
//   CustomerActions.updateCustomerFailed,
//   props<{ error: string }>()
// );

// export const addCustomer = createAction(
//   CustomerActions.addCustomer,
//   props<{customer: Lead}>()
// );

// export const addCustomerSuccess = createAction(
//   CustomerActions.addCustomerSuccess,
//   props<{ customer: Lead }>()
// );

// export const addCustomerFailed = createAction(
//   CustomerActions.addCustomerFailed,
//   props<{ error: string }>()
// );

export const setCustomers = createAction(
  CustomerActions.setCustomers,
  props<{customers: Lead[]}>()
)
export const setCustomersSuccess = createAction(
  CustomerActions.setCustomersSuccess,
  props<{ customer: Lead }>()
)

export const setCustomersFailed = createAction(
  CustomerActions.setCustomersFailed,
  props<{ error: string }>()
)
