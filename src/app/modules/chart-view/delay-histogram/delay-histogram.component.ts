import { Component, Input, OnChanges } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexFill,
  ApexResponsive
} from 'ng-apexcharts';

import { Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-delay-histogram',
  templateUrl: './delay-histogram.component.html'
})
export class DelayHistogramComponent implements OnChanges {

  @Input() flights: Flight[] = [];

  series: ApexAxisChartSeries = [];

  chart: ApexChart = {
    type: 'area',
    height: 300,
    width: '100%',
    toolbar: {
      show: false
    }
  };

  responsive: ApexResponsive[] = [
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 250
        }
      }
    },
    {
      breakpoint: 480,
      options: {
        chart: {
          height: 220
        }
      }
    }
  ];

  xaxis: ApexXAxis = {
    categories: ['0–10 min', '10–30 min', '30–60 min']
  };

  title: ApexTitleSubtitle = {
    text: 'Flights Performance',
    align: 'center',
    style: {
      fontSize: '12px',
      fontWeight: '400'
    }
  };

  stroke: ApexStroke = {
    curve: 'smooth'
  };

  fill: ApexFill = {
    opacity: 0.4
  };

  ngOnChanges(): void {
    this.buildChart();
  }

  buildChart(): void {
    let d1 = 0;
    let d2 = 0;
    let d3 = 0;

    this.flights.forEach(f => {

      if (f.status !== 'Delayed') return;

      const delay = this.getDelayMinutes(f);

      if (delay <= 10) d1++;
      else if (delay <= 30) d2++;
      else if (delay <= 60) d3++;
    });

    this.series = [
      {
        name: 'Delayed Flights',
        data: [d1, d2, d3]
      }
    ];
  }

  getDelayMinutes(f: Flight): number {
    if (!f.etd || !f.actualDepartureTime) return 0;

    const scheduled = this.toMinutes(f.etd);
    const actual = this.toMinutes(f.actualDepartureTime);

    return Math.max(0, actual - scheduled);
  }

  toMinutes(time: string): number {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  }
}