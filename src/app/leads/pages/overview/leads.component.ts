import { LeadFacade } from '../../services/lead.facade';
import { LeadService } from '../../services/leads.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Lead } from '~types/lead';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit, OnDestroy {
  leads: Lead[];
  private destroyed$ = new Subject<boolean>();

  constructor(private leadService: LeadService,
              private store: LeadFacade) { }

  ngOnInit(): void {
    // this.store.getLeads().subscribe(leads => {
    //   console.log(leads);
    //   if(leads.length === 0) {
    //     this.leadService.fetchLeads().subscribe(leads => {
    //       console.log(leads);
    //       this.store.setLeads(leads);
    //       this.leads = leads;
    //     })
    //   } else {
    //     this.leads = leads;
    //   }
    // })

    this.leadService.fetchLeads().subscribe(leads => {
      console.log(leads);
      this.store.setLeads(leads);
      this.leads = leads;
      console.log(this.leads);
    })


  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
