import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '~shared/shared.module';

// import { LeadsOverviewPageComponent } from './pages/overview/leads.component';
// import { LeadsRoutingModule } from './leads.routing';
// import { LeadDetailPageComponent } from './pages/lead-detail/lead-detail.component';
// import { NewLeadPageComponent } from './pages/new-lead-form/new-lead-form.component';
// import { LeadEditPageComponent } from './pages/lead-edit/lead-edit.component';

import { customerReducers } from './store/leads.reducer';
import { CustomerFacade } from './services/lead.facade';
import { CustomerEffects } from './store/lead.effects';
import { CustomerService } from './services/leads.service';
import { LeadsComponent } from './pages/overview/leads.component';
import { NewLeadFormComponent } from './pages/new-lead-form/new-lead-form.component';
import { LeadDetailComponent } from './pages/lead-detail/lead-detail.component';
import { LeadsRoutingModule } from './leads.routing';

@NgModule({
  imports: [
    CommonModule,
    LeadsRoutingModule,
    StoreModule.forFeature('customers', customerReducers),
    EffectsModule.forFeature([CustomerEffects]),
    SharedModule,
  ],
  declarations: [
    LeadsComponent,
    NewLeadFormComponent,
    LeadDetailComponent
  ],
  providers: [CustomerEffects, CustomerService, CustomerFacade]
})
export class LeadsModule { }
