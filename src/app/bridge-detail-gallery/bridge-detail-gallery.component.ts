import {Component , OnInit } from '@angular/core';
import {Lightbox} from "ngx-lightbox";


@Component({
  selector: 'app-bridge-detail-gallery',
  templateUrl: './bridge-detail-gallery.component.html',
  styleUrls: ['./bridge-detail-gallery.component.css'],
})

export class BridgeDetailGalleryComponent implements OnInit {

  IMAGES : any;
  tempIMAGES = [
    {id: 1, title: 'Brooklyn Banks skate park, seen in 2009', url: 'assets/images/bridges-list/brooklyn_bridge/1.jpg', bridge_id: 1, name: 'Brooklyn Bridge'},
    {id: 2, title: 'View of diagonal stays and vertical suspender cables; the main cables are at top', url: 'assets/images/bridges-list/brooklyn_bridge/2.jpg', bridge_id: 1, name: 'Brooklyn Bridge'},
    {id: 3, title: "Characteristic pointed arches of the bridge's Gothic Revival suspension towers", url: 'assets/images/bridges-list/brooklyn_bridge/3.jpg', bridge_id: 1, name: 'Brooklyn Bridge'},
    {id: 4, title: "Artists' conception, by Currier and Ives, of the bridge while construction was underway, 1872", url: 'assets/images/bridges-list/brooklyn_bridge/4.jpg', bridge_id: 1, name: 'Brooklyn Bridge'},
    {id: 5, title: 'Under construction, c. 1872 – c. 1887', url: 'assets/images/bridges-list/brooklyn_bridge/5.jpg', bridge_id: 1, name: 'Brooklyn Bridge'},
    {id: 6, title: 'From Tower to Tower—the suspension bridge over the East River—view from the Brooklyn Tower (1877)', url: 'assets/images/bridges-list/brooklyn_bridge/6.jpg', bridge_id: 1, name: 'Brooklyn Bridge'},
    {id: 7, title: "Newspaper headline announcing the Brooklyn Bridge's opening", url: 'assets/images/bridges-list/brooklyn_bridge/7.jpg', bridge_id: 1, name: 'Brooklyn Bridge'},
    {id: 8, title: "The Brooklyn Bridge's elevated pedestrian promenad…he cables descend below the height of the girders", url: 'assets/images/bridges-list/brooklyn_bridge/8.png', bridge_id: 1, name: 'Brooklyn Bridge'},
    {id: 9, title: 'Brooklyn Bridge with Freedom Tower and 8 Spruce Street in the background, New York, United States.', url: 'assets/images/bridges-list/brooklyn_bridge/9.jpg', bridge_id: 1, name: 'Brooklyn Bridge'},
    {id: 10, title: 'Brooklyn Bridge seen from One World Trade Center Skypod', url: 'assets/images/bridges-list/brooklyn_bridge/10.jpg', bridge_id: 1, name: 'Brooklyn Bridge'},
    {id: 11, title: 'The view at night in 2008', url: 'assets/images/bridges-list/brooklyn_bridge/11.jpg', bridge_id: 1, name: 'Brooklyn Bridge'},
    {id: 12, title: 'South tower seen from walkway, with Art Deco elements', url: 'assets/images/bridges-list/golden_gate_bridge/1.jpg', bridge_id: 2, name: 'Golden Gate Bridge'},
    {id: 13, title: 'Below Golden Gate Bridge', url: 'assets/images/bridges-list/golden_gate_bridge/2.jpeg', bridge_id: 2, name: 'Golden Gate Bridge'},
    {id: 14, title: 'Panorama of the Golden Gate Bridge at sunset, as seen from just north of Alcatraz Island', url: 'assets/images/bridges-list/golden_gate_bridge/3.jpg', bridge_id: 2, name: 'Golden Gate Bridge'},
    {id: 15, title: 'The Golden Gate Bridge and Fort Point', url: 'assets/images/bridges-list/golden_gate_bridge/4.jpg', bridge_id: 2, name: 'Golden Gate Bridge'},
    {id: 16, title: 'A view of the Golden Gate Bridge from the Marin Headlands on a foggy morning at sunrise', url: 'assets/images/bridges-list/golden_gate_bridge/5.jpg', bridge_id: 2, name: 'Golden Gate Bridge'},
    {id: 17, title: 'View of Marin from the south tower', url: 'assets/images/bridges-list/golden_gate_bridge/6.jpg', bridge_id: 2, name: 'Golden Gate Bridge'},
    {id: 18, title: 'Top of the south tower', url: 'assets/images/bridges-list/golden_gate_bridge/7.jpg', bridge_id: 2, name: 'Golden Gate Bridge'},
    {id: 19, title: 'Looking south', url: 'assets/images/bridges-list/golden_gate_bridge/8.jpg', bridge_id: 2, name: 'Golden Gate Bridge'},
    {id: 20, title: 'Panorama of San Francisco with two bridges (Wester…the background behind the north tower) from Marin', url: 'assets/images/bridges-list/golden_gate_bridge/9.jpg', bridge_id: 2, name: 'Golden Gate Bridge'},
    {id: 21, title: 'Panorama of the Golden Gate Bridge at night, with San Francisco in the background', url: 'assets/images/bridges-list/golden_gate_bridge/10.jpg', bridge_id: 2, name: 'Golden Gate Bridge'},
    {id: 22, title: 'Tower Bridge under construction, 1892', url: 'assets/images/bridges-list/tower_bridge/1.jpg', bridge_id: 3, name: 'Tower Bridge'},
    {id: 23, title: '1895 painting of the opening of Tower Bridge, William Lionel Wyllie', url: 'assets/images/bridges-list/tower_bridge/2.jpg', bridge_id: 3, name: 'Tower Bridge'},
    {id: 24, title: 'Tower Bridge during the first mass air raid on London, 7 September 1940', url: 'assets/images/bridges-list/tower_bridge/3.jpg', bridge_id: 3, name: 'Tower Bridge'},
    {id: 25, title: 'A Short Sunderland of No. 201 Squadron RAF moored …g the 1956 commemoration of the Battle of Britain', url: 'assets/images/bridges-list/tower_bridge/4.jpg', bridge_id: 3, name: 'Tower Bridge'},
    {id: 26, title: 'Tower Bridge at dawn', url: 'assets/images/bridges-list/tower_bridge/5.jpg', bridge_id: 3, name: 'Tower Bridge'},
    {id: 27, title: 'The tall ship Wylde Swan passing under Tower Bridg…mpic rings folded up to allow passage of the mast', url: 'assets/images/bridges-list/tower_bridge/6.jpg', bridge_id: 3, name: 'Tower Bridge'},
    {id: 28, title: 'The day view', url: 'assets/images/bridges-list/tower_bridge/7.jpg', bridge_id: 3, name: 'Tower Bridge'},
    {id: 29, title: 'The night view', url: 'assets/images/bridges-list/tower_bridge/8.jpg', bridge_id: 3, name: 'Tower Bridge'},
  ];

  _albums: any = [];

  constructor( private _lightbox: Lightbox) {
    this.allImages();
  }

  ngOnInit(): void {

  }

  allImages(): void {
    for(let i = 0; i < this.tempIMAGES.length; i++) {
      const album = {
        src: this.tempIMAGES[i].url,
        caption: '<a routerLink="/bridge-detail">' + this.tempIMAGES[i].name + '</a>' + ' - ' + this.tempIMAGES[i].title,
        thumb: this.tempIMAGES[i].url,
      }
      this._albums.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}

