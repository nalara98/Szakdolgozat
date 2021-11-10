import { AuthenticationService } from 'src/app/services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RouteGuard implements CanActivate {

    constructor(private rout: Router, private auth: AuthenticationService){}
    
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.auth.currentUserObservable().pipe(
            take(1),
            map(user => !!user),
            tap(bejelentkezve=>{
                if(!bejelentkezve){
                    this.rout.navigate(['/bejelentkezes']);
                }
            })
        );
    } 
}