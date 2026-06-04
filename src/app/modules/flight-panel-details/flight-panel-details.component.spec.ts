import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightPanelDetailsComponent } from './flight-panel-details.component';

describe('FlightPanelDetailsComponent', () => {
  let component: FlightPanelDetailsComponent;
  let fixture: ComponentFixture<FlightPanelDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightPanelDetailsComponent]
    });
    fixture = TestBed.createComponent(FlightPanelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
