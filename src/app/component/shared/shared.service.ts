import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  @Output() fire: EventEmitter<any> = new EventEmitter();
  constructor() { }

  showSideMenu(showMenu: boolean) {
    console.log('change started', showMenu);
    this.fire.emit(showMenu);
  }
  getEmittedValue() {
    return this.fire;
  }
}
