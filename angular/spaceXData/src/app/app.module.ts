import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { FiltersSectionComponent } from './data/filters-section/filters-section.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
 
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    FiltersSectionComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
