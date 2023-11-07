import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'details', component: DetailsComponent },
    ]}
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
    RouterModule
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class AccountRoutingModule { }
