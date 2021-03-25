import { Component, OnInit, OnDestroy } from '@angular/core';
import { Lead } from '~types/lead';
import { Subject } from 'rxjs';
import { LeadFacade } from '../../services/lead.facade';
import { LeadService } from '../../services/leads.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit, OnDestroy {
  leads: Lead[];
  private destroyed$ = new Subject<boolean>();

  constructor(private store: LeadFacade,
              private leadService: LeadService) { }

  ngOnInit(): void {
    this.store.getLeads().subscribe(leads => {
      if(leads.length === 0) {
        this.leadService.fetchLeads().subscribe(leads => {
          this.store.setLeads(leads);
          this.leads = leads;
        })
      } else {
        this.leads = leads;
      }
      console.log(leads);
    })

  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
