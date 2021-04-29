import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'progressive-test';
  constructor(private readonly updates: SwUpdate) { 
    this.updates.available.subscribe(event=>{
      console.log('current version=>', event.current, 'available version=>',event.available);
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
