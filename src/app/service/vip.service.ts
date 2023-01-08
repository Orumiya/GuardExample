import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class VipService {
    constructor(private httpClient: HttpClient) { }

    currentVipStatus: Observable<boolean> = of(false);

    getVipStatus(): Observable<boolean> {
        return this.currentVipStatus;

        /* If we need to get a fresh data from the backend, setup the proper API call
         return this.httpClient.get<boolean>('someURL/getvipstatus');
        */
    }

    setVipStatus(newStatus: boolean): void {
        this.currentVipStatus = of(newStatus);
    }
}