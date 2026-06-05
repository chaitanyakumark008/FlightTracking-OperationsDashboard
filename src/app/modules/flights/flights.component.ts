import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/shared/services/flight.service';
import { Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html'
})
export class FlightsComponent implements OnInit {

  flights: Flight[] = [];

 columns = [
  { key: 'flightNumber', label: 'Flight No', icon: 'confirmation_number' },
  { key: 'callsign', label: 'Callsign', icon: 'call' },
  { key: 'origin', label: 'Origin', icon: 'flight_takeoff' },
  { key: 'destination', label: 'Destination', icon: 'flight_land' },
  { key: 'status', label: 'Status', icon: 'info' },
  { key: 'aircraftType', label: 'Aircraft', icon: 'flight' }
];

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights(): void {
    this.flightService.getFlights().subscribe(res => {
      this.flights = res;
    });
  }

  onRowClick(row: any): void {
    console.log('Selected Flight:', row);
  }

  onAction(event: any): void {
    console.log('Action:', event);
  }
}