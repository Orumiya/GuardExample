import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { map, Observable } from "rxjs";
import { SomeService } from "../service/some.service";

@Injectable({
    providedIn: 'root'
})
export class ClickedRouteGuard implements CanActivate {
    constructor(private someService: SomeService,
        private snackbar: MatSnackBar
    ) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.someService.currentNumberOfClicksObs.pipe(
            map(res => {
                if(route.data['requiredClicks'] <= res) {
                    return true;
                }
                this.snackbar.open('Your clicks are not enough. You need atleast 5 clicks', 'OK',
                {
                   duration: 3000,
                   verticalPosition: 'top'
                });
                return false;
            })
        );
    }
}