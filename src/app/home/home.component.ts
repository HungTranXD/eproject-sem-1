import {Component, OnInit, TemplateRef} from '@angular/core';
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ALLTOPLISTS: any;
  SOMELATESTPOST: any;
  displayMoreTopList = 0;
  displayMoreLatestPost = 0;

  //Url for cssmapsplugin java script file
  url = 'assets/cssmapsplugin.js';

  public loading = true;
  public loadingTemplate !: TemplateRef<any>;

  constructor( private homeService: HomeService) { }

  ngOnInit(): void {
    //Load js file for cssmapsplugin
    this.loadAPI;

    this.allTopLists();
    this.someLatestPosts();
  }

  //Display all top lists
  allTopLists(): void {
    this.homeService.getAllTopLists().subscribe(
      (response) => {
        this.loading = false;
        this.ALLTOPLISTS = response;
        console.log(this.ALLTOPLISTS);
      },
      (err) => {
        this.loading = false
      }
    )
  }

  //Display 6 latest posts
  someLatestPosts(): void {
    this.homeService.getPostsPerPage('all', 'all', 8, 0).subscribe( response => {
      this.SOMELATESTPOST = response;
      console.log(this.SOMELATESTPOST);
    })
  }

  //Create methods to load java scripts in ngOnInit
  public loadSript() {
    console.log("preparing to load...");
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  loadAPI = new Promise( resolve => {
    console.log("resolving promise...");
    this.loadSript();
  })
}
