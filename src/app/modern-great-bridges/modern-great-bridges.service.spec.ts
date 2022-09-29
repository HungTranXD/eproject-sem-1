import { TestBed } from '@angular/core/testing';

import { ModernGreatBridgesService } from './modern-great-bridges.service';

describe('ModernGreatBridgesService', () => {
  let service: ModernGreatBridgesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModernGreatBridgesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
