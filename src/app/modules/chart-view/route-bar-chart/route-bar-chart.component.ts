import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexResponsive,
  ApexPlotOptions
} from 'ng-apexcharts';

import { FlightService } from 'src/app/shared/services/flight.service';
import { Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-route-bar-chart',
  templateUrl: './route-bar-chart.component.html'
})
export class RouteBarChartComponent implements OnInit {

  flights: Flight[] = [];

  series: ApexAxisChartSeries = [];

  chart: ApexChart = {
    type: 'bar',
    height: 300,
    width: '100%',
    toolbar: {
      show: false
    }
  };

  xaxis: ApexXAxis = {
    categories: []
  };

  title: ApexTitleSubtitle = {
    text: 'Flights from Origin',
    align: 'center',
    style: {
      fontSize: '12px',
      fontWeight: '400'
    }
  };

  dataLabels: ApexDataLabels = {
    enabled: true
  };

  plotOptions: ApexPlotOptions = {
    bar: {
      borderRadius: 4,
      columnWidth: '50%',
      distributed: true
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
        },
        dataLabels: {
          enabled: false
        }
      }
    }
  ];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights(): void {
    this.flightService.getFlights().subscribe(res => {
      this.flights = res;
      this.buildChart();

      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 300);
    });
  }

  buildChart(): void {

    const map = new Map<string, number>();

    this.flights.forEach(f => {
      map.set(
        f.origin,
        (map.get(f.origin) || 0) + 1
      );
    });

    const sorted = Array.from(map.entries())
      .sort((a, b) => b[1] - a[1]);

    this.xaxis = {
      categories: sorted.map(x => x[0])
    };

    this.series = [
      {
        name: 'Flights',
        data: sorted.map(x => x[1])
      }
    ];
  }
}