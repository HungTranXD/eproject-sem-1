import { Component, OnInit } from '@angular/core';
import {SearchResultService} from "./search-result.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  bridgeName: string | undefined;
  private sub: any;

  POSTS: any;
  page: number = 1;
  count: number = 0;
  listSize: number = 10;

  constructor( private searchResultService: SearchResultService,
               private route: ActivatedRoute,
               private router: Router) {
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    //First get the bridge name from the current route:
    const routeParams = this.route.snapshot.paramMap;
    const bridgeNameFromRoute = String(routeParams.get('name'));

    //Call the search method with the above name as parameter:
    this.bridgeName = bridgeNameFromRoute;
    this.searchResultList(this.bridgeName);
  }

  searchResultList(name: string): void {
    this.searchResultService.searchBridgesByName(name).subscribe( response => {
      this.POSTS = response;
      console.log(this.POSTS);
    })
  }

  onListDataChange(event: any) {
    this.page = event;
    // this.searchResultList(this.bridgeName);
  }
}
