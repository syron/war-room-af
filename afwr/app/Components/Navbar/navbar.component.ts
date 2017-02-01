import { Component } from '@angular/core';

export var fileVersion = '?tmplv=' + Date.now();

@Component({
    selector: 'app-navbar',
    templateUrl: '/app/components/navbar/navbar.component.html' + fileVersion,
})
export class NavbarComponent {
    constructor() {
        
    }
    clicked() {
        alert('test');
    }
}
