import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Header2Service} from "./header2.service";

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  searchInputValue: string = '';

  displaySideMenu = 0;
  displaySearchBar = 0;

  CONTINENTS: any;

  constructor( private router: Router,
               private header2Service: Header2Service) { }

  ngOnInit(): void {
    this.continentList();
  }
  submit() {
    this.router.navigate(['/search-result', this.searchInputValue]);
  }

  //Display all continents in dropdown list
  continentList(): void {
    this.header2Service.getAllContinents().subscribe( response => {
      this.CONTINENTS = response;
      console.log(this.CONTINENTS);
    })
  }
}
