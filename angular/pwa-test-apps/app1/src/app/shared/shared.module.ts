import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { HeaderComponent } from './header/header.component';
import { ByPropPipe } from './pipes/by-prop.pipe';
import { DataTableComponent } from './data-table/data-table.component';
import { OnlyNumberDirective } from './input-guards/only-number.directive';
import { OnlyAlphaDirective } from './input-guards/only-alpha.directive';
import { OnlyAlphaNumericDirective } from './input-guards/only-alpha-numeric.directive';
import { PreventSpecialCharsDirective } from './input-guards/prevent-special-chars.directive';
import { OnlyEmailDirective } from './input-guards/only-email.directive';
import { NoInputDirective } from './input-guards/no-input.directive';
import { PreventCopyPasteDirective } from './input-guards/prevent-copy-paste.directive';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent, 
    ByPropPipe, 
    DialogBoxComponent, 
    DataTableComponent,
    OnlyNumberDirective,
    OnlyAlphaDirective,
    OnlyAlphaNumericDirective,
    PreventSpecialCharsDirective,
    OnlyEmailDirective,
    NoInputDirective,
    PreventCopyPasteDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    HeaderComponent,
    ByPropPipe,
    DialogBoxComponent,
    DataTableComponent,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,

    OnlyNumberDirective,
    OnlyAlphaDirective,
    OnlyAlphaNumericDirective,
    PreventSpecialCharsDirective,
    OnlyEmailDirective,
    NoInputDirective,
    PreventCopyPasteDirective
  ]
})
export class SharedModule { }
