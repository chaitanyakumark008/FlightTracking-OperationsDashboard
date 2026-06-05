import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartViewRoutingModule } from './chart-view-routing.module';
import { ChartViewComponent } from './chart-view.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { MaterialModule } from 'src/app/material.module';
import { AppCommonModule } from 'src/app/shared/common.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RouteBarChartComponent } from './route-bar-chart/route-bar-chart.component';
import { DelayHistogramComponent } from './delay-histogram/delay-histogram.component';


@NgModule({
  declarations: [
    ChartViewComponent,
    DonutChartComponent,
    RouteBarChartComponent,
    DelayHistogramComponent
  ],
  imports: [
    CommonModule,
    ChartViewRoutingModule,MaterialModule,AppCommonModule,NgApexchartsModule
  ],
   exports: [
      ChartViewComponent
  ]
})
export class ChartViewModule { }
