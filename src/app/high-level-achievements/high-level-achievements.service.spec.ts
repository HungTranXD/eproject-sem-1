import { TestBed } from '@angular/core/testing';

import { HighLevelAchievementsService } from './high-level-achievements.service';

describe('HighLevelAchievementsService', () => {
  let service: HighLevelAchievementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighLevelAchievementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
