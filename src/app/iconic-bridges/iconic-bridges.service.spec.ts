import { TestBed } from '@angular/core/testing';

import { IconicBridgesService } from './iconic-bridges.service';

describe('IconicBridgesService', () => {
  let service: IconicBridgesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconicBridgesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
