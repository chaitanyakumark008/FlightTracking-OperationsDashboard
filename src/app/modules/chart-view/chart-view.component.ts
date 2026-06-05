import { Component, Input } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.scss']
})
export class ChartViewComponent {
  @Input() flights: Flight[] = [];
}
