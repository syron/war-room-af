import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginAd } from '../../Models/Account/LoginAd'
export var fileVersion = '?tmplv=' + Date.now();


@Component({
    selector: 'app-loginform',
    templateUrl: '/app/components/Account/LoginForm.component.html' + fileVersion
})

export class LoginFormComponent {
    model = new LoginAd("", "");
    //get diagnostic() { return JSON.stringify(this.model); }
}

