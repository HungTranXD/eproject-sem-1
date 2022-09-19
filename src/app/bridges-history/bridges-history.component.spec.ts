import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgesHistoryComponent } from './bridges-history.component';

describe('BridgesHistoryComponent', () => {
  let component: BridgesHistoryComponent;
  let fixture: ComponentFixture<BridgesHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridgesHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BridgesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
