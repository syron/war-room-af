import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JsonPlaceholderService {
    constructor(private http: Http) {
        
    }

    getJson() : Promise<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise().then(response => response.json()).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}