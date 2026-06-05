import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteBarChartComponent } from './route-bar-chart.component';

describe('RouteBarChartComponent', () => {
  let component: RouteBarChartComponent;
  let fixture: ComponentFixture<RouteBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteBarChartComponent]
    });
    fixture = TestBed.createComponent(RouteBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
