import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddToysComponent } from './components/add-toys/add-toys.component';
import { ViewToysComponent } from './components/view-toys/view-toys.component';



@NgModule({
  declarations: [
    AppComponent,
    AddToysComponent,
    ViewToysComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
