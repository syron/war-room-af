﻿import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { JsonPlaceholderService } from '../../Services/JsonPlaceholder/jsonplaceholder.service.js';
export var fileVersion = '?tmplv=' + Date.now();
@Component({
    selector: 'app-muppet',
    templateUrl: '/app/components/muppet/muppet.component.html' + fileVersion,
    providers: [JsonPlaceholderService]
})
export class MuppetComponent {

    public itemList = new Array();

    constructor(private placeholderService: JsonPlaceholderService, private http: Http) {}

    ngOnInit(): any {
        this.getData();
    }

    getData() {
        this.placeholderService.getJsonDataAjax("/Muppet/GetStuff").subscribe((res: Response) => this.itemList = res.json());

        //this.placeholderService.getJsonData("/Muppet/GetStuff")
        //    .then(d => this.itemList = d);
    }
}
