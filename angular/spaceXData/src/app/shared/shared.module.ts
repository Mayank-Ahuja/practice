import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FilterButtonsComponent } from './filter-buttons/filter-buttons.component';



@NgModule({
  declarations: [FilterButtonsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    FilterButtonsComponent
  ]
})
export class SharedModule { }
 