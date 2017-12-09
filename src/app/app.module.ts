import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {TabModule} from 'angular-tabs-component';
import { NavComponent } from './nav/nav.component';
import { RegComponent } from './reg/reg.component';
import {routing} from './app.router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegComponent,
    WelcomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    TabModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
