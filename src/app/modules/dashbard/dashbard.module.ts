import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbardRoutingModule } from './dashbard-routing.module';
import { DashbardComponent } from './dashbard.component';


@NgModule({
  declarations: [
    DashbardComponent
  ],
  imports: [
    CommonModule,
    DashbardRoutingModule
  ]
})
export class DashbardModule { }
