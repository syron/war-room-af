import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class JsonPlaceholderService {

    constructor(private http: Http) { }

    getJson(): void {
        console.log("Hello World!");
    }

    getJsonData(url: string, returnData: any): any {
        this.http.get(url).subscribe(data => returnData = data,
            err => this.logError(err));
    }

    logError(err: any) {
        console.error(err);
    }

    //private extractData(res: Response) {
    //    return res;
    //}

    //private handleError(error: Response | any) {
       
    //}
}