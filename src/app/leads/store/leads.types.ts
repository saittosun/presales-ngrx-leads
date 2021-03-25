import { Lead } from './../../types/lead';
import { Customer } from '~types/customer';

import { CustomerActions } from './lead.actions';

export interface CustomerListState {
  results: Lead[];
  loading: boolean;
  error: string;
}

export interface CustomersState {
  list: CustomerListState;
}

export interface AppState {
  customers: CustomersState;
}

export interface CustomerAction {
  type: keyof typeof CustomerActions;
  results?: Lead[];
  error?: string;
  loading?: boolean;
}
