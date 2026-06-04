import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { AppCommonModule } from '../shared/common.module';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AppCommonModule,
    MaterialModule
  ]
})
export class LayoutModule { }
