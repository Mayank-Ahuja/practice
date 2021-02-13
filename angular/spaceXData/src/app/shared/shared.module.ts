import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProgramCardComponent } from './program-card/program-card.component';
import { FilterButtonsComponent } from './filter-buttons/filter-buttons.component';



@NgModule({
  declarations: [ProgramCardComponent, FilterButtonsComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ProgramCardComponent,
    FilterButtonsComponent
  ]
})
export class SharedModule { }
