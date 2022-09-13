import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ALLTOPLISTS: any;
  SOMELATESTPOST: any;
  displayMoreTopList = 0;
  displayMoreLatestPost = 0;

  constructor( private homeService: HomeService) { }

  ngOnInit(): void {
    this.allTopLists();
    this.someLatestPosts();
  }

  //Display all top lists
  allTopLists(): void {
    this.homeService.getAllTopLists().subscribe( response => {
      this.ALLTOPLISTS = response;
      console.log(this.ALLTOPLISTS);
    })
  }

  //Display 6 latest posts
  someLatestPosts(): void {
    this.homeService.getPostsPerPage('all', 'all', 6, 0).subscribe( response => {
      this.SOMELATESTPOST = response;
      console.log(this.SOMELATESTPOST);
    })
  }

  latestPostData = [
    {title: 'The Brooklyn Bridge', country: 'United State', continent: 'North America', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
    {title: 'The Brooklyn Bridge', country: 'United State', continent: 'North America', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
    {title: 'The Brooklyn Bridge', country: 'United State', continent: 'North America', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
    {title: 'The Brooklyn Bridge', country: 'United State', continent: 'North America', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
    {title: 'The Brooklyn Bridge', country: 'United State', continent: 'North America', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
    {title: 'The Brooklyn Bridge', country: 'United State', continent: 'North America', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
  ];
}
