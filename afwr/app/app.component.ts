import { Component } from '@angular/core';
import { JsonPlaceholderService } from './Services/JsonPlaceholder/jsonplaceholder.service.js';
import { RouterModule, Routes } from '@angular/router';

export var fileVersion = '?tmplv=' + Date.now();


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



@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html' + fileVersion,
  providers: [JsonPlaceholderService]
})
export class AppComponent  {
    name = 'Angular';

    constructor(private placeholderService: JsonPlaceholderService) {
        //placeholderService.getJson()
        //    .then(d => console.log(d));
    }
}
