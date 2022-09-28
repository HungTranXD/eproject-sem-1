import {Component, OnInit, TemplateRef} from '@angular/core';
import {IconicBridgesService} from "./iconic-bridges.service";

@Component({
  selector: 'app-iconic-bridges',
  templateUrl: './iconic-bridges.component.html',
  styleUrls: ['./iconic-bridges.component.scss']
})
export class IconicBridgesComponent implements OnInit {
  POSTS: any;

  public loading = true;
  public loadingTemplate !: TemplateRef<any>;

  constructor( private iconicBridgesService: IconicBridgesService) { }

  ngOnInit(): void {
    this.postList();
  }

  postList(): void {
    this.iconicBridgesService.getIconicBridges().subscribe( res => {
      this.loading = false;
      this.POSTS = res;
      console.log(this.POSTS);
    })
  }
}
