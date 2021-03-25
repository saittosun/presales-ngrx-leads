import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './core/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadDetailComponent } from './leads/pages/lead-detail/lead-detail.component';
import { LeadsComponent } from './leads/pages/overview/leads.component';
import { NewLeadFormComponent } from './leads/pages/new-lead-form/new-lead-form.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'leads', loadChildren: () => import('./leads/leads.module').then((mod) => mod.LeadsModule) },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then((mod) => mod.CustomersModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
