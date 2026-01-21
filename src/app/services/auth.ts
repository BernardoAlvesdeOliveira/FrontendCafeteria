import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private loggedIn = signal(false);
  
  isAuthenticated(): boolean {
    return this.loggedIn();
  }

  login() {
    this.loggedIn.set(true);
  }

  logout() {
    this.loggedIn.set(false);
  }

}
