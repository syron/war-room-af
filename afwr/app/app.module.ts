import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component.js';
import { NavbarComponent } from './Components/Navbar/navbar.component.js';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, NavbarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
