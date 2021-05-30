import { Component, HostListener } from '@angular/core';

import { AppUpdateService } from './shared/services/app-level/app-update.service';
import { ScreenInfoService } from './shared/services/app-level/screen-info.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'progressive-test';
  constructor(private appUpdateService: AppUpdateService, private screenInfoService: ScreenInfoService ) { 
    this.appUpdateService.checkForUpdate();
  }

  @HostListener('window:resize', ['$event']) onResize(event){
    //this.deviceScreenWidth.next(event.target.innerWidth);
    //console.log('screen width ==> ',event.target.innerWidth);
    this.screenInfoService.setScreenSizeAndOrientation(event.target.innerWidth,screen.orientation);
  }
  
}
