import {Component, OnInit} from '@angular/core';

interface listImage {
  imageSrc : string;
  imageAlt : string;
  imageTitle : string;
}

@Component({
  selector: 'app-bridge-detail',
  templateUrl: './bridge-detail.component.html',
  styleUrls: ['./bridge-detail.component.css']
})
export class BridgeDetailComponent implements OnInit {
  title = 'gallery-lightbox';
  data: listImage[] = [
    {
      imageSrc: 'assets/images/golden_gate_bridge.jpg', imageAlt: 'image 1',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first'
    },
    {
      imageSrc: 'assets/images/brooklyn_bridge.jpg', imageAlt: 'image 2',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first '
    },
    {
      imageSrc: 'assets/images/great_belt_bridge.jpg', imageAlt: 'image 3',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first '
    },
    {
      imageSrc: 'assets/images/bridges-list/agas_agas_bridge/1.jpg', imageAlt: 'image 4',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first '
    },
    {
      imageSrc: 'assets/images/golden_gate_bridge.jpg', imageAlt: 'image 5',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first '
    },
    {
      imageSrc: 'assets/images/bridges-list/agas_agas_bridge/2.jpg', imageAlt: 'image 6',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first '
    },
    {
      imageSrc: 'assets/images/great_belt_bridge.jpg', imageAlt: 'image 7',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first '
    },
    {
      imageSrc: 'assets/images/bridges-list/agas_agas_bridge/1.jpg', imageAlt: 'image 8',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first '
    },
    {
      imageSrc: 'assets/images/brooklyn_bridge.jpg', imageAlt: 'image 9',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first '
    },
    {
      imageSrc: 'assets/images/golden_gate_bridge.jpg', imageAlt: 'image 10',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first '
    },
    {
      imageSrc: 'assets/images/great_belt_bridge.jpg', imageAlt: 'image 11',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first '
    },
    {
      imageSrc: 'assets/images/bridges-list/agas_agas_bridge/2.jpg', imageAlt: 'image 12',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first '
    },
    {
      imageSrc: 'assets/images/golden_gate_bridge.jpg', imageAlt: 'image 13',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first '
    },
    {
      imageSrc: 'assets/images/brooklyn_bridge.jpg', imageAlt: 'image 14',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first '
    },
    {
      imageSrc: 'assets/images/great_belt_bridge.jpg', imageAlt: 'image 15',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first '
    },
    {
      imageSrc: 'assets/images/bridges-list/agas_agas_bridge/4.jpg', imageAlt: 'image 16',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first '
    },
    {
      imageSrc: 'assets/images/great_belt_bridge.jpg', imageAlt: 'image 17',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first '
    },
    {
      imageSrc: 'assets/images/bridges-list/agas_agas_bridge/5.jpg', imageAlt: 'image 18',
      imageTitle: 'If you decide to go with the separate scripts solution, Popper must come first '
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
