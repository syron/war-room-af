import { Component } from '@angular/core';
import { JsonPlaceholderService } from './Services/JsonPlaceholder/jsonplaceholder.service.js';
import { RouterModule, Routes } from '@angular/router';

export var fileVersion = '?tmplv=' + Date.now();

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html' + fileVersion,
  styleUrls: ['/app/app.component.css'],
  providers: [JsonPlaceholderService]
})
export class AppComponent  {
    name = 'Angular';
    toggled = false;

    constructor(private placeholderService: JsonPlaceholderService) {
        
    }

    toggleMenu() {
        this.toggled = !this.toggled;
        console.log('Hello world', this.toggled);
    }
}
