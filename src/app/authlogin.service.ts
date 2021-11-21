import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthloginService {

  constructor() { }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.clear();
  }
}
