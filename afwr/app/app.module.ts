import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MuppetComponent } from './Components/Muppet/muppet.component.js';
import { NavbarComponent } from './Components/Navbar/navbar.component.js';
import { LoginFormComponent } from './Components/Account/LoginForm.component.js';
import { PageNotFoundComponent } from './Components/PageNotFound/PageNotFound.component.js';

import { AppComponent } from './app.component.js';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AppComponent, NavbarComponent, MuppetComponent, LoginFormComponent, PageNotFoundComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
