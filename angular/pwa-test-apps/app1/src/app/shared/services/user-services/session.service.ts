import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private userSessionId: string = '';

  constructor() { }

  getUserSessionId(): string {
    if (this.userSessionId.length <= 0) {
      // if (sessionStorage.loggedInUserSessionId) {
      //   this.setUserSessionId(sessionStorage.loggedInUserSessionId);
      // }
      if (localStorage.loggedInUserSessionId) {
        this.setUserSessionId(localStorage.loggedInUserSessionId);
      }
    }
    return this.userSessionId;
  }

  setUserSessionId(sessionId: string): void {
    // sessionStorage.setItem('loggedInUserSessionId', sessionId);
    localStorage.setItem('loggedInUserSessionId', sessionId);
    this.userSessionId = sessionId;
  }

  resetSessionData(): void {
    this.userSessionId = '';
  }

}
