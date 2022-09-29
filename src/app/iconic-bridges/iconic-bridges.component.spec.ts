import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconicBridgesComponent } from './iconic-bridges.component';

describe('IconicBridgesComponent', () => {
  let component: IconicBridgesComponent;
  let fixture: ComponentFixture<IconicBridgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconicBridgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconicBridgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
