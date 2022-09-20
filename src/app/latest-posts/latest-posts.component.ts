import { Component, OnInit } from '@angular/core';
import { LatestPostsService } from "./latest-posts.service";

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
  CONTINENTS: any;
  continentName: string = "";
  displayContinents = 1;
  COUNTRIES: any;
  countryName: string = "";

  title = 'pagination';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  listSize: number = 10;
  listSizes: any = [5, 10, 15, 20];

  //Create 2 more variables to store parameters for pagination onListDataChange() function
  continentId: string = 'all';
  countryCode: string = 'all'

  constructor( private latestPostsService: LatestPostsService) { }

  ngOnInit(): void {
    this.continentList();
    this.allCountryList();
    // this.postList(); //the first way
    this.getTotalNumber('all', 'all');
    this.postListPerPage('all', 'all');
  }

  // --- THIS FUNCTION IS CALLED WHEN CHOOSING CONTINENT TO FILTER ---
  filterByContinent(continent: any): void{
    this.page = 1;
    this.countryList(continent.id);
    // this.postListByContinent(continent.id);//The first way
    this.postListPerPage(continent.id, 'all');
    this.getTotalNumber(continent.id, 'all');
    this.continentName = ': '+ continent.name;
    this.countryName = '';
    this.triggerClickContinentButton();
    this.continentId = continent.id;//Store value for pagination onListDataChange() function
    this.countryCode = 'all';//Store value for pagination onListDataChange() function
  }
  // --- THIS FUNCTION IS CALLED WHEN CHOOSING COUNTRY TO FILTER ---
  filterByCountry(country: any): void{
    this.page = 1;
    // this.postListByCountry(country.code);//The first way
    this.postListPerPage(country.continent_id, country.code);
    this.getTotalNumber(country.continent_id, country.code)
    this.countryName = ': ' + country.country_name;
    this.triggerClickCountryButton();
    this.countryCode = country.code; //Store value for pagination onListDataChange() function
  }

  //Choosing continent to filter will trigger click event on continent button (and close the collapse body)
  triggerClickContinentButton(): void{
    let element: HTMLElement = document.getElementById('continent-button') as HTMLElement;
    element.click();
   };
  //Choosing country to filter will trigger click event on country button (and close the collapse body)
  triggerClickCountryButton(): void{
     let element: HTMLElement = document.getElementById('country-button') as HTMLElement;
     element.click();
   }
  //Display all continents in filter
  continentList(): void {
    this.latestPostsService.getAllContinents().subscribe( response => {
      this.CONTINENTS = response;
      console.log(this.CONTINENTS);
    })
  }
  //Display all countries in filter
  allCountryList(): void {
    this.latestPostsService.getAllCountries().subscribe( response => {
      this.COUNTRIES = response;
      console.log(this.COUNTRIES);
    })
  }
  //Re display countries list after choosing the continent
  countryList(continentId: number): void {
    this.latestPostsService.getCountries(continentId).subscribe( response => {
      this.COUNTRIES = response;
      console.log(this.COUNTRIES);
    })
  }


  //1. THE FIRST WAY:
  //Display all bridge posts (without limit and offset)
  postList(): void {
    this.latestPostsService.getAllPosts().subscribe(response => {
      this.POSTS = response;
      console.log(this.POSTS);
    })
  }
  //Display bridge posts filter by continent (without limit and offset)
  postListByContinent(continentId: number): void {
    this.latestPostsService.getPostsByContinent(continentId).subscribe(response => {
      this.POSTS = response;
      console.log(this.POSTS);
    })
  }
  //Display bridge posts filter by countries (without limit and offset)
  postListByCountry(countryCode: string): void {
    this.latestPostsService.getPostsByCountry(countryCode).subscribe(response => {
      this.POSTS = response;
      console.log(this.POSTS);
    })
  }


  //2. THE SECOND WAY (SERVER PAGINATION):
  //Display posts per page
  getTotalNumber(continentId: string, countryCode: string): void {
    this.latestPostsService.getTotalPostNumber(continentId, countryCode).subscribe(response => {
      this.count = response[0].total;
      console.log(this.count);
    })
  }
  //limit = listSize; offset = (page - 1) * listSize
  postListPerPage(continentId: string, countryCode: string): void {
    this.latestPostsService.getPostsPerPage(continentId, countryCode,this.listSize, (this.page - 1) * this.listSize).subscribe(response => {
      this.POSTS = response;
      console.log(this.POSTS);
    })
  }





  // --- Pagination event handler ---
  onListDataChange(event: any) {
    this.page = event;
    // this.postList(); //the first way
    this.postListPerPage(this.continentId, this.countryCode);
  }
  // onListSizeChange(event: any) {
  //   this.listSize = event.target.value;
  //   this.page = 1;
  //   this.postList();
  // }

  // --- Recall API to redisplay posts list when press clear filter ---
  clearFilter(): void {
    this.page = 1;
    this.continentList();
    this.allCountryList();
    // this.postList();//The first way
    this.getTotalNumber('all', 'all');
    this.postListPerPage('all', 'all');
    this.continentName = '';
    this.countryName = '';
  }
}
