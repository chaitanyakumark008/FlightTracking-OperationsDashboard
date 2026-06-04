import { Component,Input} from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
@Component({
  selector: 'app-flight-panel-details',
  templateUrl: './flight-panel-details.component.html',
  styleUrls: ['./flight-panel-details.component.scss']
})
export class FlightPanelDetailsComponent {
@Input() flight?: Flight;
}
