import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';

interface dialogBoxConfig {
  errType: string,
  errTitle: string,
  errorMessage:string
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
  encapsulation: ViewEncapsulation.None,
})


export class DialogBoxComponent implements OnInit {

  showDialog: Boolean;
  dialogConfig: dialogBoxConfig = {errType: '', errTitle: '', errorMessage:''};
 
  dialogAction: Subject<Boolean> = new Subject() 

  constructor() { 
    this.showDialog = false
  }

  ngOnInit(): void {
  }

  public openDialog(dialogConfig: dialogBoxConfig): Promise<Boolean>{
    this.showDialog = true;
    this.dialogConfig = dialogConfig;
    return new Promise((resolve)=>{
      this.dialogAction.subscribe((res)=>{
        resolve(res);
        this.showDialog = false;
      })
    })
  }

  acceptButton():void{
    this.dialogAction.next(true);
  }
  rejectButton():void{
    this.dialogAction.next(false);
  }

}
