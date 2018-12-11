import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { StocksComponent } from './stocks/stocks.component';
import { PatientsComponent } from './patients/patients.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  declarations: [StocksComponent, PatientsComponent, StockDetailComponent, AdminDashboardComponent, AdminHomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
