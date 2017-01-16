import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './Components/Navbar/navbar.component.js';
import { AppComponent } from './app.component.js';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, NavbarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
