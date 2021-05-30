import { Component, Output,EventEmitter, HostListener, OnInit } from '@angular/core';

import { Router, Event, NavigationEnd } from '@angular/router';

import * as envProps from 'src/environments/environment';
declare var cryptor: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  userLogin: Boolean = false; 
  envProps: any = envProps.environment.envProps;
  userName: string = '';

  //mobileDevice: Boolean = false;

  @Output() logout = new EventEmitter;

  constructor(private router: Router){
    router.events.subscribe((event: Event)=>{
      if(event instanceof NavigationEnd){
        if(router['url'].includes('/login')){
          this.userLogin = false;
        }else{
          this.userLogin = true;
          this.getUserDetails();
        }
      }
    })
  }

  ngOnInit(): void {
    /* if(window.innerWidth<600){
      this.mobileDevice = true;
    }else{
      this.mobileDevice = false;
    } */
  }

 /*  @HostListener('window:resize', ['$event']) onResize(event) {
    if(event.target.innerWidth<600){
      this.mobileDevice = true;
    }else{
      this.mobileDevice = false;
    }
  } */

  getUserDetails():void{
    // const userDetails = JSON.parse(cryptor.decryptText(sessionStorage.getItem('loggedInUserData'),this.envProps['storageKey']));
    const userDetails = JSON.parse(cryptor.decryptText(localStorage.getItem('loggedInUserData'),this.envProps['storageKey']));

    this.userName = userDetails['emp_name'];
  }

  userLogout():void {
    this.logout.emit();
  }

  refreshComponent():void{
    
  }

}
