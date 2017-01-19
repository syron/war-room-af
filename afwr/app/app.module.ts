import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { NavbarComponent } from './Components/Navbar/navbar.component.js';
import { AppComponent } from './app.component.js';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, NavbarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
