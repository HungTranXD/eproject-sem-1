import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

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

  private subject = new Subject<any>();
  senClickEvent() {
    this.subject.next(1);
  }
  getClickEvent(): Observable<any>{
    return this.subject.asObservable();
  }
}
