import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { Lead } from './../../types/lead';
import { map } from "rxjs/operators";
import { setLeads } from "../store/lead.actions";
import { AppLeadState } from "../store/leads.types";
import { Observable } from "rxjs";
import { LEADS_ERROR, LEADS_LOADING } from "../store/lead.selectors";

@Injectable()
export class LeadFacade {
  constructor(private store: Store<AppLeadState>) {}

  public setLeads(leads: Lead[]) {
    this.store.dispatch(setLeads({leads: leads}));
  }

  public selectLoading(): Observable<boolean> {
    return this.store.pipe(select(LEADS_LOADING));
  }

  public selectError(): Observable<string> {
    return this.store.pipe(select(LEADS_ERROR));
  }

  // public getLeads() {
  //   return this.store.select('leads').pipe(map(state => state.projects));
  // }

  public getLeads(): Observable<Lead[]> {
    return this.store.select('leads').pipe(map(state => state.lead.projects));
  }
}
