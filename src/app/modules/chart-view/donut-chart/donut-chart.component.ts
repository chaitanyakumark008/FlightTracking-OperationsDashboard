import { Component, Input, OnChanges } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexLegend,
  ApexResponsive,
  ApexDataLabels,
  ApexTitleSubtitle
} from 'ng-apexcharts';

import { Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnChanges {

  @Input() flights: Flight[] = [];

  series: ApexNonAxisChartSeries = [];

  chart: ApexChart = {
    type: 'donut',
    height: 348,
    width: '100%',
    toolbar: {
      show: false
    }
  };

  title: ApexTitleSubtitle = {
    text: 'Flight Status Distribution',
    align: 'center',
    style: {
      fontSize: '12px',
      fontWeight: '400'
    }
  };

  labels: string[] = [
    'Active',
    'Delayed',
    'Arrived'
  ];

  colors = [
    '#4CAF50',
    '#FF9800',
    '#2196F3'
  ];

  legend: ApexLegend = {
    position: 'bottom',
    horizontalAlign: 'center'
  };

  dataLabels: ApexDataLabels = {
    enabled: true
  };

  responsive: ApexResponsive[] = [
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 260
        }
      }
    },
    {
      breakpoint: 480,
      options: {
        chart: {
          height: 220
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ];

  ngOnChanges(): void {
    this.buildChart();
  }

  buildChart(): void {

    const active = this.flights.filter(
      f => f.status === 'Active'
    ).length;

    const delayed = this.flights.filter(
      f => f.status === 'Delayed'
    ).length;

    const arrived = this.flights.filter(
      f => f.status === 'Arrived'
    ).length;

    this.series = [
      active,
      delayed,
      arrived
    ];
  }
}