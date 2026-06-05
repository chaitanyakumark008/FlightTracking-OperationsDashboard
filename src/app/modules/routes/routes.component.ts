import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/shared/services/flight.service';
import { Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html'
})
export class RoutesComponent implements OnInit {

  flights: Flight[] = [];
  routeData: any[] = [];

  columns = [
    { key: 'route', label: 'Route', icon: 'alt_route' },
    { key: 'flightNumber', label: 'Flight Number', icon: 'confirmation_number' },
    { key: 'status', label: 'Status', icon: 'info' },
    { key: 'etd', label: 'ETD', icon: 'flight_takeoff' },
    { key: 'actualDepartureTime', label: 'ATD', icon: 'flight' },
    { key: 'eta', label: 'ETA', icon: 'flight_land' },
    { key: 'actualArrivalTime', label: 'ATA', icon: 'flight' },
    { key: 'avgDelay', label: 'Delay', icon: 'schedule' }
  ];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights(): void {
    this.flightService.getFlights().subscribe(res => {
      this.flights = res;
      this.buildRouteTable();
    });
  }


  buildRouteTable(): void {

    const map = new Map<string, any>();

    this.flights.forEach(f => {

      const routeKey = `${f.origin} → ${f.destination}`;

      if (!map.has(routeKey)) {
        map.set(routeKey, {
          route: routeKey,

          status: this.getRouteStatus(f),
          flightNumber: f.flightNumber,
          etd: f.etd,
          eta: f.eta,
          actualDepartureTime: f.actualDepartureTime,
          actualArrivalTime: f.actualArrivalTime,

          delaySum: 0,
          delayCount: 0,
          avgDelay: '—'
        });
      }

      const route = map.get(routeKey);


      // DELAY CALCULATION

      let delay = 0;

      if (f.actualDepartureTime) {
        delay = this.getMinutesDiff(f.etd, f.actualDepartureTime);
      }

      if (f.actualArrivalTime) {
        delay = this.getMinutesDiff(f.eta, f.actualArrivalTime);
      }

      route.delaySum += delay;
      route.delayCount++;
    });

    // finalize
    this.routeData = Array.from(map.values()).map(r => {

      if (r.delayCount > 0) {
        const avg = Math.round(r.delaySum / r.delayCount);
        r.avgDelay = this.formatMinutes(avg);
      }

      delete r.delaySum;
      delete r.delayCount;

      return r;
    });
  }


  // ROUTE STATUS LOGIC

  getRouteStatus(f: Flight): string {

    if (f.status === 'Delayed') return 'Delayed';
    if (f.status === 'Arrived') return 'Completed';
    return 'Active';
  }

  // TIME DIFFERENCE

  getMinutesDiff(scheduled: string, actual: string): number {
    return Math.max(0, this.toMinutes(actual) - this.toMinutes(scheduled));
  }

  toMinutes(time: string): number {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  }

  formatMinutes(min: number): string {
    const h = Math.floor(min / 60);
    const m = min % 60;
    return `${h}h ${m}m`;
  }
}