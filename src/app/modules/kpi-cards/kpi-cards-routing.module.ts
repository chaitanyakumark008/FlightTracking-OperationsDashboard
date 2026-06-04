import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KpiCardsComponent } from './kpi-cards.component';

const routes: Routes = [{ path: '', component: KpiCardsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KpiCardsRoutingModule { }
