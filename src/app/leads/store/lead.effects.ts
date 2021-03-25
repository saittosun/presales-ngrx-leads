import { Lead } from './../../types/lead';
import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";

import { Customer } from "~types/customer";

import { LeadService } from "../services/leads.service";

import { getCustomersFailed } from "./lead.actions";
import { getCustomersSuccess } from "./lead.actions";
import { CustomerActions } from "./lead.actions";

@Injectable()
export class CustomerEffects {
  constructor(private actions$: Actions,
              private customerService: LeadService,
              private router: Router) { }

  public getCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerActions.getCustomers),
      switchMap(() =>
        this.customerService.fetchLeads().pipe(
          map((results: Lead[]) => getCustomersSuccess({ results })),
          catchError((error: any) => of(getCustomersFailed({ error })))
        )
      )
    )
  );

  // public updateCustomer$ = createEffect(() =>
  // this.actions$.pipe(
  //   ofType(CustomerActions.updateCustomer),
  //   switchMap(({customer, id}: {customer: Customer; id: number}) =>
  //     this.customerService.updateCustomer(id, customer).pipe(
  //       map((customer: Customer) => updateCustomerSuccess({ customer })),
  //       tap(() => {
  //         this.router.navigate(['customers/customer-detail', id])
  //       }),
  //       catchError((error: any) => of(updateCustomerFailed({ error })))
  //       )
  //     )
  //   )
  // );

  // public addCustomer$ = createEffect(() =>
  //  this.actions$.pipe(
  //    ofType(CustomerActions.addCustomer),
  //    switchMap(({customer}: {customer: Customer;}) =>
  //     this.customerService.addCustomer(customer).pipe(
  //       map((customer: Customer) => addCustomerSuccess({customer})),
  //       tap(() => {
  //         this.router.navigate(['customers/customer-detail'])
  //       }),
  //       catchError((error: any) => of(addCustomerFailed({error})))
  //     )
  //   )
  //  )
  // )
}
