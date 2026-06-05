import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsComponent } from './flights.component';
import { AppCommonModule } from 'src/app/shared/common.module';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    FlightsComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,AppCommonModule,MaterialModule
  ]
})
export class FlightsModule { }
