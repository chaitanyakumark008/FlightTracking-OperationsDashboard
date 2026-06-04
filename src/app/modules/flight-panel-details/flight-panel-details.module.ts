import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightPanelDetailsRoutingModule } from './flight-panel-details-routing.module';
import { FlightPanelDetailsComponent } from './flight-panel-details.component';


@NgModule({
  declarations: [
    FlightPanelDetailsComponent
  ],
  imports: [
    CommonModule,
    FlightPanelDetailsRoutingModule
  ],
   exports: [
    FlightPanelDetailsComponent
  ]
})
export class FlightPanelDetailsModule { }
