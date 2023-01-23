import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SomeService {
    constructor(private httpClient: HttpClient) { }

    private readonly currentNumberOfClicks = new BehaviorSubject<number>(0);
    currentNumberOfClicksObs = this.currentNumberOfClicks.asObservable();

    buttonClickCount(): void {
        this.currentNumberOfClicks.next(this.currentNumberOfClicks.value + 1);
    }
}