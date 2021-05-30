import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenInfoService {

  private screenSize = new BehaviorSubject({'screenSize': window.innerWidth,'orientation':screen.orientation.angle});
  screenWidth = this.screenSize.asObservable();

  constructor() { }

  setScreenSizeAndOrientation(screenSize: number,screenOrientation: object):void{
    this.screenSize.next({'screenSize':screenSize,'orientation':screenOrientation['angle']});
  }

}
