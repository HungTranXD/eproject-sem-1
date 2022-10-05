import {Component, OnInit, TemplateRef} from '@angular/core';
import {ContactUsService} from "./contact-us.service";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public name = '';
  public email = '';
  public telephone = '';
  public message = '';

  constructor(private common: ContactUsService) { }

  ngOnInit(): void {

  }

  public submitForm(): void{
    // console.log('submit form: name = ', this.name);
    // console.log('submit form: email = ', this.email);
    // console.log('submit form: telephone = ', this.telephone);
    // console.log('submit form: message = ', this.message);
    this.common.submitData({name: this.name, email: this.email, telephone: this.telephone, message: this.message});

  }



  center: google.maps.LatLngLiteral = {
    lat: 21.0288108,
    lng: 105.7804978
  };
  zoom = 18;
  markerPositions: google.maps.LatLngLiteral =  { lat: 21.0288108, lng: 105.7804978 };


}
