import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeDetailGalleryComponent } from './bridge-detail-gallery.component';

describe('BridgeDetailGalleryComponent', () => {
  let component: BridgeDetailGalleryComponent;
  let fixture: ComponentFixture<BridgeDetailGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridgeDetailGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BridgeDetailGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
