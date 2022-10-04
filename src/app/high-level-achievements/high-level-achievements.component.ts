import {Component, OnInit, TemplateRef} from '@angular/core';
import {HighLevelAchievementsService} from "./high-level-achievements.service";

@Component({
  selector: 'app-high-level-achievements',
  templateUrl: './high-level-achievements.component.html',
  styleUrls: ['./high-level-achievements.component.scss']
})
export class HighLevelAchievementsComponent implements OnInit {
  POSTS: any;

  public loading = true;
  public loadingTemplate !: TemplateRef<any>;

  constructor( private highLevelAchievements: HighLevelAchievementsService) { }

  ngOnInit(): void {
    this.postList();
  }

  postList(): void {
    this.highLevelAchievements.getHighLevelAchievements().subscribe( res => {
      this.loading = false;
      this.POSTS = res;
      console.log(this.POSTS);
    })
  }
}
