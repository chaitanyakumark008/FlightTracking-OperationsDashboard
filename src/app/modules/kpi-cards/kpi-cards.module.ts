import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KpiCardsRoutingModule } from './kpi-cards-routing.module';
import { KpiCardsComponent } from './kpi-cards.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    KpiCardsComponent
  ],
  imports: [
    CommonModule,
    KpiCardsRoutingModule,MaterialModule
  ],
   exports: [
    KpiCardsComponent
  ]
})
export class KpiCardsModule { }
