import { Component, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginAd } from '../../Models/Account/LoginAd'
export var fileVersion = '?tmplv=' + Date.now();

@Component({
    selector: 'app-loginform',
    templateUrl: 'Account/LoginForm' + fileVersion
    //templateUrl: '/app/components/Account/LoginForm.component.html' + fileVersion
})


export class LoginFormComponent {
    //model = new LoginAd("", "");
    //get diagnostic() { return JSON.stringify(this.model); }

    ngAfterViewInit(): any {
        console.log('ngAfterViewInit() called.');
        //this.initClickEvents();
    }

    public clicked(e: JQueryEventObject) {
        var theForm = $(e.target).closest('.form');
        (<any>$.validator).unobtrusive.parse($(theForm));
        var isValid = (<any>$(theForm)).valid();
        alert(isValid);
    }

    initClickEvents() {
        $("#nisse").on("click", function (e){
            var theForm = $(e.target).closest('.form');
            (<any>$.validator).unobtrusive.parse($(theForm));
            var isValid = (<any>$(theForm)).valid();
            alert(isValid);
        });
    }
}

