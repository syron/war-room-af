import { Component } from '@angular/core';
import { JsonPlaceholderService } from './Services/JsonPlaceholder/jsonplaceholder.service.js';
@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html',
  providers: [JsonPlaceholderService]
})
export class AppComponent  {
    name = 'Angular';

    constructor(private placeholderService: JsonPlaceholderService) {
        placeholderService.getJson();
    }
}
