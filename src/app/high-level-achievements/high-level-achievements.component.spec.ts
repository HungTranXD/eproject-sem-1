import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighLevelAchievementsComponent } from './high-level-achievements.component';

describe('HighLevelAchievementsComponent', () => {
  let component: HighLevelAchievementsComponent;
  let fixture: ComponentFixture<HighLevelAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighLevelAchievementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighLevelAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
