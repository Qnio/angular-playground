import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningAlert } from './warning-alert/warning-alert.component';
import { SuccessAlert } from './success-alert/success-alert.component';
import { ToysComponent } from './toys/toys.component';
import { ToysDetailsComponent } from './toys-details/toys-details.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlert,
    SuccessAlert,
    ToysComponent,
    ToysDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
