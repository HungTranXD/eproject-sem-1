import {Component, Input, OnInit} from '@angular/core';
import {GalleryService} from "./gallery.service";
import {Lightbox} from "ngx-lightbox";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  IMAGES: any;
  tempIMAGES: any;

  _albums: any = [];

  constructor( private galleryService: GalleryService,
               private _lightbox: Lightbox) {
    this.allImages();
  }

  ngOnInit(): void {

  }

  //Get all images
  allImages(): void {
    this.galleryService.getAllImages().subscribe( response => {
      this.IMAGES = response;
      console.log(this.IMAGES);
      //Add first 50 images to tempIMAGES to be displayed
      this.tempIMAGES = this.IMAGES.slice(0,50);
      //The for loop below is used to add data to _albums and run in constructor for lightbox
      for(let i = 0; i < this.IMAGES.length; i++) {
        const album = {
          src: this.IMAGES[i].url,
          caption: '<a routerLink="/bridge-detail">' + this.IMAGES[i].name + '</a>' + ' - ' + this.IMAGES[i].title,
          thumb: this.IMAGES[i].url,
        }
        this._albums.push(album);
      }
    })
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  showMore() {
    let newLength = this.tempIMAGES.length + 50;
    if (newLength > this.IMAGES.length) {
      newLength = this.IMAGES.length
    }
    this.tempIMAGES = this.IMAGES.slice(0,newLength);
  }
  showLess() {
    this.tempIMAGES = this.IMAGES.slice(0,50);
  }
}
