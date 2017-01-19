import { Component } from '@angular/core';
import { JsonPlaceholderService } from '../../Services/JsonPlaceholder/jsonplaceholder.service.js';
export var fileVersion = '?tmplv=' + Date.now();
@Component({
    selector: 'app-muppet',
    templateUrl: '/app/components/muppet/muppet.component.html' + fileVersion,
    providers: [JsonPlaceholderService]
})
export class MuppetComponent {

    //public itemList = [
    //    { FirstName: "Kalle" },
    //    { FirstName: "Olle" },
    //];

    public itemList = new Array();

    constructor(private placeholderService: JsonPlaceholderService) {}

    ngOnInit(): any {
        this.getData();
    }

    getData() {
        //this.itemList = this.placeholderService.getJsonData("/Muppet/GetStuff");
        this.itemList = [
        { FirstName: "Kalle", LastName: "Kula" },
        { FirstName: "Olle", LastName: "Bolle" },
        ];
    }
}
