import { Component, OnInit } from '@angular/core';
import {TopListPageService} from "./top-list-page.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-top-list-page',
  templateUrl: './top-list-page.component.html',
  styleUrls: ['./top-list-page.component.css']
})
export class TopListPageComponent implements OnInit {
  topListId: number | undefined;
  private sub: any;

  TOPLISTINFO: any;
  TOP10BRIDGES: any;

  constructor( private topListPageService: TopListPageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe( params => {
      this.topListId = +params['id']; // (+) converts string 'id' into number
      this.topListInfo(this.topListId);
    })
  }

  //Display top list info (name, description of the top list)
  topListInfo(topListId: number): void {
    this.topListPageService.getTopListInfo(topListId).subscribe( response => {
      this.TOPLISTINFO = response;
      console.log(this.TOPLISTINFO);
      console.log(this.TOPLISTINFO[0].sort_order);
      // //Display 10 bridges in the top list
      this.topListPageService.get10Bridges(this.TOPLISTINFO[0].sort_order).subscribe( response => {
        this.TOP10BRIDGES = response;
        console.log(this.TOP10BRIDGES);
      })
    })
  }

}
