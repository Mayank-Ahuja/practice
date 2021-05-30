//this service handles all the tasks related login credentials.

import { Injectable } from '@angular/core';

import * as envProps from 'src/environments/environment';
declare var cryptor: any;

@Injectable({
  providedIn: 'root'
})
export class LoginCredsService {
  envProps: object = envProps.environment.envProps;
  userCredentials = {};

  constructor() { }

  setLoginCredentials(loginId: string, password: string): void {
    this.userCredentials['id'] = cryptor.encrypt(loginId, this.envProps['storageKey']);
    this.userCredentials['pwd'] = cryptor.encrypt(password, this.envProps['storageKey']);
    sessionStorage.setItem('loginCredentials', cryptor.encrypt(JSON.stringify(this.userCredentials), this.envProps['storageKey']));
    localStorage.setItem('loginCredentials', cryptor.encrypt(JSON.stringify(this.userCredentials), this.envProps['storageKey']));
  }

  getLoginCredentials(): object {
    // if (sessionStorage.loginCredentials) {
    //   const loginCreds = JSON.parse(cryptor.decrypt(sessionStorage.loginCredentials, this.envProps['storageKey']));
    //   loginCreds['id'] = cryptor.decrypt(loginCreds['id'], this.envProps['storageKey']),
    //     loginCreds['pwd'] = cryptor.decrypt(loginCreds['pwd'], this.envProps['storageKey'])
    //   return loginCreds;
    // }
    if (localStorage.loginCredentials) {
      const loginCreds = JSON.parse(cryptor.decrypt(localStorage.loginCredentials, this.envProps['storageKey']));
      loginCreds['id'] = cryptor.decrypt(loginCreds['id'], this.envProps['storageKey']),
        loginCreds['pwd'] = cryptor.decrypt(loginCreds['pwd'], this.envProps['storageKey'])
      return loginCreds;
    } else {
      return {}
    }
  }

  clearUserData(): void {
    sessionStorage.clear();
    localStorage.clear();
  }

}
