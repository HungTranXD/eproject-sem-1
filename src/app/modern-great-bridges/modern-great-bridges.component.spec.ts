import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernGreatBridgesComponent } from './modern-great-bridges.component';

describe('ModernGreatBridgesComponent', () => {
  let component: ModernGreatBridgesComponent;
  let fixture: ComponentFixture<ModernGreatBridgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModernGreatBridgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernGreatBridgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
