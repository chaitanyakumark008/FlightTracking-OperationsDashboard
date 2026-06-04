import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiCardsComponent } from './kpi-cards.component';

describe('KpiCardsComponent', () => {
  let component: KpiCardsComponent;
  let fixture: ComponentFixture<KpiCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KpiCardsComponent]
    });
    fixture = TestBed.createComponent(KpiCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
