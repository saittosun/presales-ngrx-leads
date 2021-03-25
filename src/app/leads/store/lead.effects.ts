import { Lead } from './../../types/lead';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from 'rxjs';
import { getLeadsFailed, getLeadsSuccess } from './lead.actions'
import { LeadActions } from './lead.actions';
import { LeadService } from '../services/leads.service';

@Injectable()
export class LeadEffects {
  constructor(private actions$: Actions,
              private leadService: LeadService) {}

  public getLeads$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeadActions.getLeads),
      switchMap(() =>
        this.leadService.fetchLeads().pipe(
          map((projects: Lead[]) => getLeadsSuccess({projects})),
          catchError((error: any) => of(getLeadsFailed({ error })))
        )
      )
    )
  );
}
