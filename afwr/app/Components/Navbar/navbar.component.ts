import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: '/app/components/navbar/navbar.component.html',
})
export class NavbarComponent {
    constructor() {

    }
    clicked() {
        alert('test');
    }
}
