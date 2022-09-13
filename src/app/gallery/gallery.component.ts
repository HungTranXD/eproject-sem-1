import {Component, Input, OnInit} from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
  titleGalleryImg: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() galleryData: Item[] = [
    {imageSrc : 'assets/images/great_belt_bridge.jpg', imageAlt : 'img1', titleGalleryImg: 'The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent'},
    {imageSrc : 'assets/images/golden_gate_bridge.jpg', imageAlt : 'img2', titleGalleryImg: 'The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent'},
    {imageSrc : 'assets/images/brooklyn_bridge.jpg', imageAlt : 'img3', titleGalleryImg: 'The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent'},
    {imageSrc : 'assets/images/sydney_harbour_bridge.jpg', imageAlt : 'img4', titleGalleryImg: 'The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent'},
    {imageSrc : 'assets/images/brooklyn_bridge.jpg', imageAlt : 'img5', titleGalleryImg: 'The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent'},
    {imageSrc : 'assets/images/golden_gate_bridge.jpg', imageAlt : 'img6', titleGalleryImg: 'The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent'},
    {imageSrc : 'assets/images/great_belt_bridge.jpg', imageAlt : 'img7', titleGalleryImg: 'The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent'},
    {imageSrc : 'assets/images/sydney_harbour_bridge.jpg', imageAlt : 'img8', titleGalleryImg: 'The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent'},
    {imageSrc : 'assets/images/brooklyn_bridge.jpg', imageAlt : 'img9', titleGalleryImg: 'The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent'},
    {imageSrc : 'assets/images/great_belt_bridge.jpg', imageAlt : 'img10', titleGalleryImg: 'The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent'},
    {imageSrc : 'assets/images/sydney_harbour_bridge.jpg', imageAlt : 'img11', titleGalleryImg: 'The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent'},
    {imageSrc : 'assets/images/great_belt_bridge.jpg', imageAlt : 'img12', titleGalleryImg: 'The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent'},

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
