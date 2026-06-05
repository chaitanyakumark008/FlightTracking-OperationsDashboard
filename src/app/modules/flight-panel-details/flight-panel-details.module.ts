import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightPanelDetailsRoutingModule } from './flight-panel-details-routing.module';
import { FlightPanelDetailsComponent } from './flight-panel-details.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    FlightPanelDetailsComponent
  ],
  imports: [
    CommonModule,
    FlightPanelDetailsRoutingModule,MaterialModule
  ],
   exports: [
    FlightPanelDetailsComponent
  ]
})
export class FlightPanelDetailsModule { }
