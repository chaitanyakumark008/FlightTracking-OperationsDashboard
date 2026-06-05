import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesComponent } from './routes.component';
import { MaterialModule } from 'src/app/material.module';
import { AppCommonModule } from 'src/app/shared/common.module';


@NgModule({
  declarations: [
    RoutesComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,MaterialModule,AppCommonModule
  ]
})
export class RoutesModule { }
