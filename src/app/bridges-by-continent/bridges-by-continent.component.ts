import {Component, OnInit, TemplateRef} from '@angular/core';
import {BridgesByContinentService} from "./bridges-by-continent.service";
import {ActivatedRoute} from "@angular/router";
import {Lightbox} from "ngx-lightbox";

@Component({
  selector: 'app-bridges-by-continent',
  templateUrl: './bridges-by-continent.component.html',
  styleUrls: ['./bridges-by-continent.component.scss']
})
export class BridgesByContinentComponent implements OnInit {
  CONTINENTINFO: any;
  IMAGES: any;
  tempIMAGES: any;
  _albums: any = [];

  LONGEST: any;
  HIGHEST: any;
  TALLEST: any;

  POSTS: any;
  page: number = 1;
  count: number = 0;
  listSize: number = 9;

  public loading = true;
  public loadingTemplate !: TemplateRef<any>;

  constructor( private bridgesByContinentService: BridgesByContinentService,
               private route: ActivatedRoute,
               private _lightbox: Lightbox) {
    //Run this for lightbox constructor
    this.route.params.subscribe( routeParams => {
      this.imagesByContinent(routeParams['id']);
    })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      // do something with the query params
    });
    this.route.params.subscribe( routeParams => {
      this.continentInfo(routeParams['id']);
      this.topBridgeByContinent(routeParams['id']);
      this.postListByContinent(routeParams['id']);
      // this.imagesByContinent(routeParams['id']);
    })

  }


  //Get and display continent info
  continentInfo(continentId: number): void {
    this.bridgesByContinentService.getContinentInfo(continentId).subscribe( response => {
      this.CONTINENTINFO = response;
      console.log(this.CONTINENTINFO);
    })
  }

  //Get and display all bridges (posts) of this continent
  postListByContinent(continentId: number): void {
    this.loading = true;
    this.bridgesByContinentService.getPostsByContinent(continentId).subscribe(response => {
      setTimeout(() => {
        this.loading = false;
      }, 1200);
      this.POSTS = response;
      console.log(this.POSTS);
    })
  }

  //Find the longest/highest/tallest bridge
  topBridgeByContinent(continentId: number): void {
    this.bridgesByContinentService.getTopBridgeByContinent(continentId, 'total_length').subscribe(response => {
      this.LONGEST = response;
      console.log(this.LONGEST);
    })
    this.bridgesByContinentService.getTopBridgeByContinent(continentId, 'clearance_below').subscribe(response => {
      this.HIGHEST = response;
      console.log(this.HIGHEST);
    })
    this.bridgesByContinentService.getTopBridgeByContinent(continentId, 'height').subscribe(response => {
      this.TALLEST = response;
      console.log(this.TALLEST);
    })
  }

  //Get and display all images of this continent
  imagesByContinent(continentId: number): void {
    this.bridgesByContinentService.getImagesByContinent(continentId).subscribe( response => {
      this.IMAGES = response;
      console.log(this.IMAGES);
      //Add first 9 images to tempIMAGES to be displayed
      this.tempIMAGES = this.IMAGES.slice(0,20);
      //The for loop below is used to add data to _albums and run in constructor for lightbox
      for(let j = 0; j < this.IMAGES.length; j++) {
        const album = {
          src: this.IMAGES[j].url,
          caption: '<a href="/bridge-page/' + this.IMAGES[j].bridge_id +'">' + this.IMAGES[j].name + '</a>' + ' - ' + this.IMAGES[j].title,
          thumb: this.IMAGES[j].url,
        }
        this._albums.push(album);
      }
    })
  }

  onListDataChange(event: any) {
    this.page = event;
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
  showMore() {
    let newLength = this.tempIMAGES.length + 20;
    if (newLength > this.IMAGES.length) {
      newLength = this.IMAGES.length
    }
    this.tempIMAGES = this.IMAGES.slice(0,newLength);
  }
  showLess() {
    this.tempIMAGES = this.IMAGES.slice(0,20);
  }
}
