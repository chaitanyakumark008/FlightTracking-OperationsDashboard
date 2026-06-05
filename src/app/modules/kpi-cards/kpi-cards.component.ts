import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-kpi-cards',
  templateUrl: './kpi-cards.component.html',
  styleUrls: ['./kpi-cards.component.scss']
})
export class KpiCardsComponent {
  @Input() kpiData: any;
  constructor(private router: Router) { }
  goToFlights(): void {
    this.router.navigate(['/flights']);
  }
  goToRoutes(): void {
    this.router.navigate(['/routes']);
  }
}
