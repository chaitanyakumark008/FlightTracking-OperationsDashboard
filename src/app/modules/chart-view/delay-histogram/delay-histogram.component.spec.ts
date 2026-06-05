import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayHistogramComponent } from './delay-histogram.component';

describe('DelayHistogramComponent', () => {
  let component: DelayHistogramComponent;
  let fixture: ComponentFixture<DelayHistogramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelayHistogramComponent]
    });
    fixture = TestBed.createComponent(DelayHistogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
