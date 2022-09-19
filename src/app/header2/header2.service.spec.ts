import { TestBed } from '@angular/core/testing';

import { Header2Service } from './header2.service';

describe('Header2Service', () => {
  let service: Header2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Header2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
