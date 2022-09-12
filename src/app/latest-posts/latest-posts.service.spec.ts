import { TestBed } from '@angular/core/testing';

import { LatestPostsService } from './latest-posts.service';

describe('LatestPostsService', () => {
  let service: LatestPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
