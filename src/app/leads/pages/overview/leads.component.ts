import { Component, OnInit, OnDestroy } from '@angular/core';
import { Lead } from '~types/lead';
import { Subject } from 'rxjs';
import { CustomerFacade } from '../../services/lead.facade';
import { CustomerService } from '../../services/leads.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit, OnDestroy {
  leads: Lead[];
  private destroyed$ = new Subject<boolean>();

  constructor(private store: CustomerFacade,
              private customerService: CustomerService) { }

  ngOnInit(): void {
    this.store.getCustomers().subscribe(leads => {
      console.log(leads);
    })

  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
