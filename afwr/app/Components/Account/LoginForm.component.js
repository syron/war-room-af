"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
exports.fileVersion = '?tmplv=' + Date.now();
var LoginFormComponent = (function () {
    function LoginFormComponent() {
    }
    //model = new LoginAd("", "");
    //get diagnostic() { return JSON.stringify(this.model); }
    LoginFormComponent.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit() called.');
        //this.initClickEvents();
    };
    LoginFormComponent.prototype.clicked = function (e) {
        var theForm = $(e.target).closest('.form');
        $.validator.unobtrusive.parse($(theForm));
        var isValid = $(theForm).valid();
        alert(isValid);
    };
    LoginFormComponent.prototype.initClickEvents = function () {
        $("#nisse").on("click", function (e) {
            var theForm = $(e.target).closest('.form');
            $.validator.unobtrusive.parse($(theForm));
            var isValid = $(theForm).valid();
            alert(isValid);
        });
    };
    LoginFormComponent = __decorate([
        core_1.Component({
            selector: 'app-loginform',
            templateUrl: 'Account/LoginForm' + exports.fileVersion
        }), 
        __metadata('design:paramtypes', [])
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=LoginForm.component.js.map