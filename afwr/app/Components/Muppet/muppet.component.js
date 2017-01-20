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
var http_1 = require('@angular/http');
var jsonplaceholder_service_js_1 = require('../../Services/JsonPlaceholder/jsonplaceholder.service.js');
exports.fileVersion = '?tmplv=' + Date.now();
var MuppetComponent = (function () {
    function MuppetComponent(placeholderService, http) {
        this.placeholderService = placeholderService;
        this.http = http;
        this.itemList = new Array();
    }
    MuppetComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    MuppetComponent.prototype.getData = function () {
        var _this = this;
        this.placeholderService.getJsonDataAjax("/Muppet/GetStuff").subscribe(function (res) { return _this.itemList = res.json(); });
        //this.placeholderService.getJsonData("/Muppet/GetStuff")
        //    .then(d => this.itemList = d);
    };
    MuppetComponent = __decorate([
        core_1.Component({
            selector: 'app-muppet',
            templateUrl: '/app/components/muppet/muppet.component.html' + exports.fileVersion,
            providers: [jsonplaceholder_service_js_1.JsonPlaceholderService]
        }), 
        __metadata('design:paramtypes', [jsonplaceholder_service_js_1.JsonPlaceholderService, http_1.Http])
    ], MuppetComponent);
    return MuppetComponent;
}());
exports.MuppetComponent = MuppetComponent;
//# sourceMappingURL=muppet.component.js.map