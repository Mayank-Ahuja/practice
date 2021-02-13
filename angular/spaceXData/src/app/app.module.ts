import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { FiltersSectionComponent } from './data/filters-section/filters-section.component';
 
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    FiltersSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
