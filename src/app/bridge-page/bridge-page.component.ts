import {Component, OnInit, TemplateRef} from '@angular/core';
import {BridgePageService} from "./bridge-page.service";
import {ActivatedRoute} from "@angular/router";
import {Lightbox} from "ngx-lightbox";
// import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from "ngx-gallery";

@Component({
  selector: 'app-bridge-page',
  templateUrl: './bridge-page.component.html',
  styleUrls: ['./bridge-page.component.scss']
})
export class BridgePageComponent implements OnInit {
  BRIDGEDETAIL: any;
  IMAGES: any;

  _albums: any = [];

  public loading = true;
  public loadingTemplate !: TemplateRef<any>;

  constructor( private bridgePageService: BridgePageService,
               private route: ActivatedRoute,
               private _lightbox: Lightbox) {

  }


  ngOnInit(): void {
    this.route.queryParams.subscribe( queryParams => {
      // do something with the query params
    });
    this.route.params.subscribe( routeParams => {
      this.bridgeDetail(routeParams['id']);
      this.bridgeImages(routeParams['id']);
    })
  }

  //Get bridge detail information
  bridgeDetail(bridgeId: number): void {
    this.bridgePageService.getBridgeDetail(bridgeId).subscribe( res => {
      // this.loading = false;
      this.BRIDGEDETAIL = res;
      console.log(this.BRIDGEDETAIL);
    })
  }

  //Get bridge images
  bridgeImages(bridgeId: number): void {
    this.bridgePageService.getBridgeImages(bridgeId).subscribe( res => {
      setTimeout(() => {
        this.loading = false;
      },500);
      this.IMAGES = res;
      console.log(this.IMAGES);
      //The for loop below is used to add data to _albums and run in constructor for lightbox
      for(let k = 0; k < this.IMAGES.length; k++) {
        const album = {
          src: this.IMAGES[k].url,
          caption: this.IMAGES[k].title,
          thumb: this.IMAGES[k].url,
        }
        this._albums.push(album);
      };
    })
  }

  //Lightbox for images
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }



}
