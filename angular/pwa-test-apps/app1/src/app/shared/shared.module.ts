import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';



@NgModule({
  declarations: [
    DialogBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DialogBoxComponent
  ]
})
export class SharedModule { }
