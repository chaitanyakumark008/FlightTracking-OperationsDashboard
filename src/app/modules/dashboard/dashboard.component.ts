import { Component, AfterViewInit, OnInit, AfterViewChecked } from '@angular/core';
import * as L from 'leaflet';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { FlightService } from 'src/app/shared/services/flight.service';
import { Flight } from 'src/app/models/flight.model';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';

// Leaflet icon fix
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: 'assets/airplane-mode.png',
  iconRetinaUrl: 'assets/airplane-mode.png',
  shadowUrl: 'assets/marker-shadow.png'
});

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, AfterViewChecked {

  map!: L.Map;
  currentFilters = {
    status: '',
    origin: '',
    destination: ''
  };
  allFlights: Flight[] = [];
  flights: Flight[] = [];
  selectedFlight?: Flight;
  routeLine?: L.Polyline;
  originMarker?: L.Marker;
  destinationMarker?: L.Marker;
  airportIcon = L.icon({
    iconUrl: 'assets/marker-icon-2x.png',
    iconRetinaUrl: 'assets/marker-icon-2x.png',
    shadowUrl: 'assets/marker-shadow.png',
    iconSize: [32, 52],
    iconAnchor: [16, 52],
    popupAnchor: [0, -45]
  });
  searchControl = new FormControl('');

  kpiData = {
    totalFlights: 0,
    activeFlights: 0,
    delayedFlights: 0,
    arrivedFlights: 0
  };

  constructor(
    private flightService: FlightService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.loadFlights();

    this.searchControl.valueChanges.subscribe(value => {
      this.searchFlights(value || '');
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  loadFlights(): void {

    this.flightService.getFlights().subscribe(data => {

      this.allFlights = data;
      this.flights = [...data];

      this.calculateKPIs();

      if (this.map) {
        this.refreshMap();
      }
    });
  }

  initMap(): void {

    this.map = L.map('map').setView([20.5937, 78.9629], 5);

    L.tileLayer(
      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: ''
      }
    ).addTo(this.map);

    this.plotFlights();
  }

  plotFlights(): void {

    this.flights.forEach(flight => {

      const marker = L.marker([
        flight.currentLat,
        flight.currentLng
      ]).addTo(this.map);

      marker.bindTooltip(
        `
        <div style="min-width:180px">
          <strong>${flight.flightNumber}</strong><br>
          Callsign: ${flight.callsign}<br>
          ${flight.origin} → ${flight.destination}<br>
          Status: ${flight.status}
        </div>
        `,
        {
          direction: 'top',
          sticky: true,
          opacity: 1
        }
      );

      marker.on('click', () => {
        this.selectFlight(flight);
      });

    });
  }

  selectFlight(flight: Flight): void {

    this.selectedFlight = flight;

    // Remove previous route
    if (this.routeLine) {
      this.map.removeLayer(this.routeLine);
    }

    // Remove old markers
    if (this.originMarker) {
      this.map.removeLayer(this.originMarker);
    }

    if (this.destinationMarker) {
      this.map.removeLayer(this.destinationMarker);
    }

    // Source Marker
    this.originMarker = L.marker(
      [flight.originLat, flight.originLng],
      { icon: this.airportIcon }
    )
      .addTo(this.map)
      .bindPopup(`Origin: ${flight.origin}`);

    // Destination Marker
    this.destinationMarker = L.marker(
      [flight.destinationLat, flight.destinationLng],
      { icon: this.airportIcon }
    )
      .addTo(this.map)
      .bindPopup(`Destination: ${flight.destination}`);

    // Dashed route line
    this.routeLine = L.polyline(
      [
        [flight.originLat, flight.originLng],
        [flight.currentLat, flight.currentLng],
        [flight.destinationLat, flight.destinationLng]
      ],
      {
        color: '#1976d2',
        weight: 4,
        dashArray: '10, 10'   // <-- dashed line
      }
    ).addTo(this.map);

    this.map.fitBounds(this.routeLine.getBounds(), {
      padding: [40, 40]
    });
  }

  searchFlights(searchText: string): void {

    const search = searchText.toLowerCase();

    this.flights = this.allFlights.filter(f =>
      f.callsign.toLowerCase().includes(search)
    );

    this.calculateKPIs();
    this.refreshMap();
  }

  openFilterDialog(): void {

    const origins = [
      ...new Set(this.allFlights.map(f => f.origin))
    ];

    const destinations = [
      ...new Set(this.allFlights.map(f => f.destination))
    ];

    const dialogRef = this.dialog.open(
      FilterDialogComponent,
      {
        width: '500px',
        data: {
          origins,
          destinations,
          filters: this.currentFilters
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {

      if (!result) {
        return;
      }

      const filteredFlights = this.allFlights.filter(f => {

        const statusMatch =
          !result.status || f.status === result.status;

        const originMatch =
          !result.origin || f.origin === result.origin;

        const destinationMatch =
          !result.destination || f.destination === result.destination;

        return (
          statusMatch &&
          originMatch &&
          destinationMatch
        );
      });

      // No records found
      if (filteredFlights.length === 0) {

        alert('No flights found for the selected filters.');

        this.currentFilters = {
          status: '',
          origin: '',
          destination: ''
        };

        this.flights = [...this.allFlights];

        this.refreshMap();

        return;
      }

      // Records found
      this.currentFilters = result;
      this.applyFilters(result);

    });
  }

  applyFilters(filters: any): void {

    this.flights = this.allFlights.filter(f => {

      const statusMatch =
        !filters.status ||
        f.status === filters.status;

      const originMatch =
        !filters.origin ||
        f.origin.toLowerCase()
          .includes(filters.origin.toLowerCase());

      const destinationMatch =
        !filters.destination ||
        f.destination.toLowerCase()
          .includes(filters.destination.toLowerCase());

      return (
        statusMatch &&
        originMatch &&
        destinationMatch
      );
    });

    this.calculateKPIs();
    this.refreshMap();
  }

  clearFilters(): void {

    this.searchControl.setValue('');

    this.flights = [...this.allFlights];

    this.calculateKPIs();
    this.refreshMap();
  }

  refreshMap(): void {

    this.map.eachLayer(layer => {

      if (
        layer instanceof L.Marker ||
        layer instanceof L.Polyline
      ) {
        this.map.removeLayer(layer);
      }
    });

    L.tileLayer(
      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: 'Map'
      }
    ).addTo(this.map);

    this.plotFlights();
  }

  calculateKPIs(): void {

    this.kpiData = {
      totalFlights: this.allFlights.length,

      activeFlights: this.allFlights.filter(
        f => f.status === 'Active'
      ).length,

      delayedFlights: this.allFlights.filter(
        f => f.status === 'Delayed'
      ).length,

      arrivedFlights: this.allFlights.filter(
        f => f.status === 'Arrived'
      ).length
    };
  }

  ngAfterViewChecked(): void {
    if (this.map) {
      setTimeout(() => {
        this.map.invalidateSize();
      });
    }
  }
}

