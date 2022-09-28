import {Component, OnInit, TemplateRef} from '@angular/core';
import {ModernGreatBridgesService} from "./modern-great-bridges.service";

@Component({
  selector: 'app-modern-great-bridges',
  templateUrl: './modern-great-bridges.component.html',
  styleUrls: ['./modern-great-bridges.component.scss']
})
export class ModernGreatBridgesComponent implements OnInit {
  POSTS: any;

  public loading = true;
  public loadingTemplate !: TemplateRef<any>;

  constructor( private modernGreatBridgesService: ModernGreatBridgesService) { }

  ngOnInit(): void {
    this.postList();
  }

  postList(): void {
    this.modernGreatBridgesService.getModernGreatBridges().subscribe( res => {
      this.loading = false;
      this.POSTS = res;
      console.log(this.POSTS);
    })
  }
}
