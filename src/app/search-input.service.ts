import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchInputService {

  private inputSourceMessage = new BehaviorSubject('');
  currentInputMessage = this.inputSourceMessage.asObservable();

  constructor() { }

  changeInputMessage(message: string) {
    this.inputSourceMessage.next(message);
  }
}
