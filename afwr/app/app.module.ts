import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MuppetComponent } from './Components/Muppet/muppet.component.js';
import { NavbarComponent } from './Components/Navbar/navbar.component.js';

import { AppComponent } from './app.component.js';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, NavbarComponent, MuppetComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
