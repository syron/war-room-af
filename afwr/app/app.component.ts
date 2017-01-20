import { Component } from '@angular/core';
import { JsonPlaceholderService } from './Services/JsonPlaceholder/jsonplaceholder.service.js';
export var fileVersion = '?tmplv=' + Date.now();
@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html' + fileVersion,
  providers: [JsonPlaceholderService]
})
export class AppComponent  {
    name = 'Angular';

    constructor(private placeholderService: JsonPlaceholderService) {
        //placeholderService.getJson()
        //    .then(d => console.log(d));
    }
}
