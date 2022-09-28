import { TestBed } from '@angular/core/testing';

import { HistoricalGreatBridgesService } from './historical-great-bridges.service';

describe('HistoricalGreatBridgesService', () => {
  let service: HistoricalGreatBridgesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricalGreatBridgesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
