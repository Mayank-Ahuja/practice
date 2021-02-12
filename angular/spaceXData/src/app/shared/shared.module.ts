import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProgramCardComponent } from './program-card/program-card.component';



@NgModule({
  declarations: [ProgramCardComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ProgramCardComponent
  ]
})
export class SharedModule { }
