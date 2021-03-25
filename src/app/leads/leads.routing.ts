import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadDetailComponent } from './pages/lead-detail/lead-detail.component';
import { NewLeadFormComponent } from './pages/new-lead-form/new-lead-form.component';
import { LeadsComponent } from './pages/overview/leads.component';


const routes: Routes = [
  { path: '', component: LeadsComponent },
  { path: 'leads/new-lead-form', component: NewLeadFormComponent },
  { path: 'leads/:id', component: LeadDetailComponent },
  { path: 'leads/edit', component: LeadDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class LeadsRoutingModule { }
