import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  public submitData(data: any): void{
    console.log('send data to server. Data = ',data)
  }

}
