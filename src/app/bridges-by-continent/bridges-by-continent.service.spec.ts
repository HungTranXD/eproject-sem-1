import { TestBed } from '@angular/core/testing';

import { BridgesByContinentService } from './bridges-by-continent.service';

describe('BridgesByContinentService', () => {
  let service: BridgesByContinentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BridgesByContinentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
