import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

import { MuppetComponent } from './Components/Muppet/muppet.component.js';
import { NavbarComponent } from './Components/Navbar/navbar.component.js';
import { LoginFormComponent } from './Components/Account/LoginForm.component.js';
import { PageNotFoundComponent } from './Components/PageNotFound/PageNotFound.component.js';
import { HomeComponent } from './Components/Home/Home.component.js';
import { AboutComponent } from './Components/About/About.component.js';


import { AppComponent } from './app.component.js';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, NavbarComponent, MuppetComponent, LoginFormComponent, PageNotFoundComponent, HomeComponent, AboutComponent],
    bootstrap: [AppComponent],
    providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppModule { }
