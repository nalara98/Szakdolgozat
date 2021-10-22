import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private rout: Router, private auth: AuthService){}
    
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.auth.currentUserObservable().pipe(
            take(1),
            map(user => !!user),
            tap(loggedIn=>{
                if(!loggedIn){
                    this.rout.navigate(['/bejelentkezes']);
                }/* itt nézük meg hogy be van e jelentkezve ha nincs visszadobjuk a bejelentkezes oldalra */
            })
        );
    } 
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state)
       
    } 
}