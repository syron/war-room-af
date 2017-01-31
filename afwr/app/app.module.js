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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var muppet_component_js_1 = require("./Components/Muppet/muppet.component.js");
var navbar_component_js_1 = require("./Components/Navbar/navbar.component.js");
var LoginForm_component_js_1 = require("./Components/Account/LoginForm.component.js");
var PageNotFound_component_js_1 = require("./Components/PageNotFound/PageNotFound.component.js");
var Home_component_js_1 = require("./Components/Home/Home.component.js");
var About_component_js_1 = require("./Components/About/About.component.js");
var app_component_js_1 = require("./app.component.js");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule],
        declarations: [app_component_js_1.AppComponent, navbar_component_js_1.NavbarComponent, muppet_component_js_1.MuppetComponent, LoginForm_component_js_1.LoginFormComponent, PageNotFound_component_js_1.PageNotFoundComponent, Home_component_js_1.HomeComponent, About_component_js_1.AboutComponent],
        bootstrap: [app_component_js_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map