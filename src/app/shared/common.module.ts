
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
    declarations: [
      SideNavComponent,
    ],
    imports: [
      CommonModule,MaterialModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule
    ],
    exports:[
      SideNavComponent,
  ],
  })
export class AppCommonModule { }