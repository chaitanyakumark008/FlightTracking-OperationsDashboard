import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { KpiCardsModule } from '../kpi-cards/kpi-cards.module';
import { FlightPanelDetailsComponent } from '../flight-panel-details/flight-panel-details.component';
import { FlightPanelDetailsModule } from '../flight-panel-details/flight-panel-details.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { FilterDialogModule } from '../filter-dialog/filter-dialog.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    KpiCardsModule,
    FlightPanelDetailsModule,
    FormsModule,ReactiveFormsModule,MaterialModule, FilterDialogModule
  ]
})
export class DashboardModule { }
