import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  id = 0;
  emailInput: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.callMethod();
    this.id = setInterval(() => {
      this.callMethod();
    }, 1000);
    this.getLocation()
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
  currentDate = new Date();
  currentDateNum = parseInt(String(this.currentDate.getDate()));
  callMethod() {
    this.currentDate = new Date();
  }
  // Get location
  lat = 0;
  lng = 0;
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          if (position) {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
          }
        },
        (error) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
