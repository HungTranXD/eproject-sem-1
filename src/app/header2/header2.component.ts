import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SearchInputService} from "../search-input.service";

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  //These 2 variables below is used for search-input.service
  massage : string = '';
  searchInputValue: string = '';

  displaySideMenu = 0;
  displaySearchBar = 0;

  constructor( private router: Router,
               private searchInputService: SearchInputService) { }

  ngOnInit(): void {
    this.searchInputService.currentInputMessage.subscribe(massage => {
      this.massage = massage;
    })
  }
  submit() {
    console.log(this.searchInputValue);
    this.searchInputService.changeInputMessage(this.searchInputValue);
    this.router.navigate(['/search-result']);
    this.searchInputService.senClickEvent();
  }
}
