import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KpiCardsRoutingModule } from './kpi-cards-routing.module';
import { KpiCardsComponent } from './kpi-cards.component';


@NgModule({
  declarations: [
    KpiCardsComponent
  ],
  imports: [
    CommonModule,
    KpiCardsRoutingModule
  ],
   exports: [
    KpiCardsComponent
  ]
})
export class KpiCardsModule { }
