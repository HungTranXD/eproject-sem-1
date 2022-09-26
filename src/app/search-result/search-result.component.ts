import {Component, OnInit, TemplateRef} from '@angular/core';
import {SearchResultService} from "./search-result.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  searchInputValue: string = '';

  POSTS: any;
  page: number = 1;
  count: number = 0;
  listSize: number = 12;

  public loading = true;
  public loadingTemplate !: TemplateRef<any>;

  constructor( private searchResultService: SearchResultService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      // do something with the query params
    });
    this.route.params.subscribe( routeParams => {
      this.searchResultList(routeParams['name']);
      this.searchInputValue = routeParams['name'];
      this.page = 1;
    })
  }

  searchResultList(name: string): void {
    this.searchResultService.searchBridgesByName(name).subscribe( response => {
      this.loading = false;
      this.POSTS = response;
      console.log(this.POSTS);
    })
  }

  onListDataChange(event: any) {
    this.page = event;
  }
}
