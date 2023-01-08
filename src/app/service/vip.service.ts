import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class VipService {
    constructor(private httpClient: HttpClient) { }

    private currentVipStatus: Observable<boolean> = of(false);

    isVip(): Observable<boolean> {
        return this.currentVipStatus;
    }

    getVipStatus(): Observable<boolean> {
       // If we need to get a fresh data from the backend, setup the proper API call
      return this.httpClient.get<boolean>('someURL/getvipstatus');
            
    }

    setVipStatus(newStatus: boolean): void {
        this.currentVipStatus = of(newStatus);
    }
}