import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
    providedIn: 'root',
})
export class DeviceService {
    private devicesURL = 'assets/devices.json';

    constructor(private http: HttpClient) {

    }

    getDevices(): Observable<string[]> {
        return this.http.get<string[]>(this.devicesURL).pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occured ${err.error.message}`;
        }else{
            errorMessage = `The server send this error ${err.status} with this message ${err.message}`
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}