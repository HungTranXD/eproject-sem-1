import { Component, OnInit } from '@angular/core';
import {SearchResultService} from "./search-result.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SearchInputService} from "../search-input.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  massage: string = '';
  searchInputValue: string = '';


  bridgeName: string | undefined;
  private sub: any;

  POSTS: any;
  page: number = 1;
  count: number = 0;
  listSize: number = 10;

  constructor( private searchResultService: SearchResultService,
               private route: ActivatedRoute,
               // private router: Router,
               private searchInputService: SearchInputService) {
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.searchInputService.currentInputMessage.subscribe(massage => {
      this.massage = massage;
    })
  this.searchInputService.getClickEvent().subscribe(() => {
    this.searchResultList(this.massage);
    this.page = 1;
  })

    // //First get the bridge name from the current route:
    // const routeParams = this.route.snapshot.paramMap;
    // const bridgeNameFromRoute = String(routeParams.get('name'));
    //
    // //Call the search method with the above name as parameter:
    // this.bridgeName = bridgeNameFromRoute;
    this.searchResultList(this.massage);
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
