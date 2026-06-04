import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightPanelDetailsComponent } from './flight-panel-details.component';

const routes: Routes = [{ path: '', component: FlightPanelDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightPanelDetailsRoutingModule { }
