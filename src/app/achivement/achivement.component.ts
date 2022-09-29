import {Component, OnInit, TemplateRef} from '@angular/core';
import {HomeService} from "../home/home.service";
import {LatestPostsService} from "../latest-posts/latest-posts.service";
import {AchivementService} from "./achivement.service";

@Component({
  selector: 'app-achive',
  templateUrl: './achivement.component.html',
  styleUrls: ['./achivement.component.css']
})
export class AchivementComponent implements OnInit {
  ALLLISTS: any;

  page: number = 1;
  listSize: number = 10;
  POSTS: any;
  count: number = 0;

  public loading = true;
  constructor( private achivementsService: AchivementService) { }

  ngOnInit(): void {
    this.allTopLists();
  }

  //Display all top lists
  allTopLists(): void {
    this.loading = true;
    this.achivementsService.getAllPosts().subscribe(
      (response) => {
        this.loading = false;
        this.ALLLISTS = response;
      },
      (err) => {
        this.loading = false
      }
    )
  }
  //limit = listSize; offset = (page - 1) * listSize
  postListPerPage(continentId: string, countryCode: string): void {
    this.achivementsService.getPostsPerPage(this.listSize, (this.page - 1) * this.listSize).subscribe(response => {
      this.POSTS = response;
      console.log(this.POSTS);
    })
  }

  // --- Pagination event handler ---
  onListDataChange(event: any) {
    this.page = event;
    // this.postList(); //the first way
  }

  }
