import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgesByContinentComponent } from './bridges-by-continent.component';

describe('BridgesByContinentComponent', () => {
  let component: BridgesByContinentComponent;
  let fixture: ComponentFixture<BridgesByContinentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridgesByContinentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BridgesByContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
