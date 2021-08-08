import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveTestComponent } from './directive-test/directive-test.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    ErrorComponent,
    DataBindingComponent,
    DirectiveTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
