
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonTableComponent } from './components/common-table/common-table.component';




@NgModule({
    declarations: [
      SideNavComponent,
      CommonTableComponent,
    ],
    imports: [
      CommonModule,MaterialModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule
    ],
    exports:[
      SideNavComponent,CommonTableComponent
  ],
  })
export class AppCommonModule { }