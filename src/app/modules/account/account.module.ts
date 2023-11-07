import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AccountRoutingModule } from './account-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    TranslateModule.forChild(),
    RouterModule
  ]
})
export class AccountModule { }
