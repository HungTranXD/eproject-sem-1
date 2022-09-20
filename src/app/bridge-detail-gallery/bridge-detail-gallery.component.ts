import {Component , Input, OnInit } from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
  AnimationEvent
  } from "@angular/animations";

interface listImage {
  imageSrc : string;
  imageAlt : string;
  imageTitle : string;
}


@Component({
  selector: 'app-bridge-detail-gallery',
  templateUrl: './bridge-detail-gallery.component.html',
  styleUrls: ['./bridge-detail-gallery.component.css'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({transform: 'scale(0.7)'}),
        animate('150ms', style({transform: 'scale(1)'}))
      ]),
      transition('visible => void', [
        style({transform: 'scale(1)'}),
        animate('150ms', style({transform: 'scale(0.7)'}))
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({opacity: 1}),
        animate('50ms', style({opacity: 0.7}))
      ])
    ])
  ]

})
export class BridgeDetailGalleryComponent implements OnInit {

  @Input() galleryDataImage : listImage[] = [];
  @Input() showCount = false;

  public previewImage = false;
  public showMark = false;
  public currentLightboxImage: listImage = this.galleryDataImage[0];
  public currentIndex = 0;
  public controls =true;
  public totalImageCount = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.totalImageCount = this.galleryDataImage.length;
  }
  //111111111111111
  onPreviewImage(index : number): void {
    //shows image
    this.showMark = true;
    this.previewImage =true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryDataImage[index];
  }

  onAnimationEnd(event: AnimationEvent) {
    if(event.toState === 'void') {
      this.showMark = false;
    }
  }

  onClosePreview() {
    this.previewImage = false;
  }

  next(): void {
    this.currentIndex = this.currentIndex + 1;
    if(this.currentIndex > this.galleryDataImage.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.galleryDataImage[this.currentIndex];
  }

  prev(): void {
    this.currentIndex = this.currentIndex - 1;
    if(this.currentIndex < 0) {
      this.currentIndex = this.galleryDataImage.length - 1;
    }
    this.currentLightboxImage = this.galleryDataImage[this.currentIndex];
  }

}

