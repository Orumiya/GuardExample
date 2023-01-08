import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, Router, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { VipService } from "../service/vip.service";

@Injectable({
    providedIn: 'root'
})
export class VipRouteGuard implements CanActivate {
    constructor(private vipService: VipService,
        private router: Router,
        private snackbar: MatSnackBar
    ) { }

    canActivate(): Observable<boolean | UrlTree> {  //next: ActivatedRouteSnapshot
        return this.vipService.getVipStatus().pipe(
            map(res => {
                if (!res) {
                    this.snackbar.open('You\'re not a VIP member, redirected to the Normal page...', 'OK', {
                        duration: 3000,
                        verticalPosition: 'top'
                    });
                    return this.router.createUrlTree(['normal']);
                }
                return res;
            })
        );
    }
}