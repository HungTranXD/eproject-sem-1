import {Component, OnInit, TemplateRef} from '@angular/core';
import {HistoricalGreatBridgesService} from "./historical-great-bridges.service";

@Component({
  selector: 'app-historical-great-bridges',
  templateUrl: './historical-great-bridges.component.html',
  styleUrls: ['./historical-great-bridges.component.scss']
})
export class HistoricalGreatBridgesComponent implements OnInit {
  POSTS: any;

  public loading = true;
  public loadingTemplate !: TemplateRef<any>;

  constructor( private historicalGreatBridgesService: HistoricalGreatBridgesService) { }

  ngOnInit(): void {
    this.postList();
  }

  postList(): void {
    this.historicalGreatBridgesService.getHistoricalGreatBridges().subscribe( res => {
      this.loading = false;
      this.POSTS = res;
      console.log(this.POSTS);
    })
  }

}
