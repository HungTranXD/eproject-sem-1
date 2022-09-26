import { TestBed } from '@angular/core/testing';

import { BridgePageService } from './bridge-page.service';

describe('BridgePageService', () => {
  let service: BridgePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BridgePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
