import { TestBed } from '@angular/core/testing';

import { TopListPageService } from './top-list-page.service';

describe('TopListPageService', () => {
  let service: TopListPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopListPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
