import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalGreatBridgesComponent } from './historical-great-bridges.component';

describe('HistoricalGreatBridgesComponent', () => {
  let component: HistoricalGreatBridgesComponent;
  let fixture: ComponentFixture<HistoricalGreatBridgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalGreatBridgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalGreatBridgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
