import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class AppUpdateService { 

  constructor(private readonly updates: SwUpdate) { 
    
  }

  checkForUpdate(): void {
    this.updates.available.subscribe(event=>{
      this.showAppUpdateAlert();
    })
  }

  showAppUpdateAlert(){
    const confirm = window.confirm('App Update Available');
    if(confirm){
      this.updateApplication();
    }
  }

  updateApplication(){
    this.updates.activateUpdate().then(()=>{
      document.location.reload();
    })
  }
}
