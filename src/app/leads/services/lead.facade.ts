import { Lead } from './../../types/lead';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Customer } from '~types/customer';

import { setCustomers } from '../store/lead.actions';
import {
  CUSTOMERS_ERROR,
  CUSTOMERS_LOADING
} from '../store/lead.selectors';
import { AppState } from '../store/leads.types';

@Injectable()
export class CustomerFacade {
  constructor(private store: Store<AppState>) { }

  public setCustomers(customers: Lead[]) {
    this.store.dispatch(setCustomers({customers: customers}));
  }

  public selectLoading(): Observable<boolean> {
    return this.store.pipe(select(CUSTOMERS_LOADING));
  }

  public selectError(): Observable<string> {
    return this.store.pipe(select(CUSTOMERS_ERROR));
  }

  public getCustomers(): Observable<Lead[]> {
    return this.store.select('customers').pipe(map(state => state.list.results));
  }

  // public updateCustomer(id: number, customer: Lead): void {
  //   this.store.dispatch(updateCustomer({id, customer}))
  // }

  // public addCustomer(customer: Lead): void {
  //   this.store.dispatch(addCustomer({customer}))
  // }
}
