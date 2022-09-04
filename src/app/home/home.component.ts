import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayMoreTopList = 0;
  topListData = [
    {title: '10 Longest Bridges in the World', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
    {title: '10 Longest Bridges in the World', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
    {title: '10 Longest Bridges in the World', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
    {title: '10 Longest Bridges in the World', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
    {title: '10 Longest Bridges in the World', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
    {title: '10 Longest Bridges in the World', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
    {title: '10 Longest Bridges in the World', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
    {title: '10 Longest Bridges in the World', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
  ];

  displayMoreLatestPost = 0;
  latestPostData = [
    {title: 'The Brooklyn Bridge', country: 'United State', continent: 'North America', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
    {title: 'The Brooklyn Bridge', country: 'United State', continent: 'North America', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
    {title: 'The Brooklyn Bridge', country: 'United State', continent: 'North America', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
    {title: 'The Brooklyn Bridge', country: 'United State', continent: 'North America', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
    {title: 'The Brooklyn Bridge', country: 'United State', continent: 'North America', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
    {title: 'The Brooklyn Bridge', country: 'United State', continent: 'North America', thumbnail: 'assets/images/brooklyn_bridge.jpg'},
  ];
}
