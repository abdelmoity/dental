import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';
import { PatientsComponent } from './patients/patients.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';

const adminRoutes: Routes = [
  { path: 'stocks', component: StocksComponent , data : {animation : 'stocks'} },
  { path: 'stock/:id', component: StockDetailComponent , data : {animation : 'stock' } },
  { path: 'patients', component: PatientsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
