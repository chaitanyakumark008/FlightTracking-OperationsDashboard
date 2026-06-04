import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterDialogRoutingModule } from './filter-dialog-routing.module';
import { FilterDialogComponent } from './filter-dialog.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FilterDialogComponent
  ],
  imports: [
    CommonModule,
    FilterDialogRoutingModule,MaterialModule,ReactiveFormsModule,FormsModule
  ],
   exports: [
      FilterDialogComponent
    ]
})
export class FilterDialogModule { }
