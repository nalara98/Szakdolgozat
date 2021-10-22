import { Injectable } from "@angular/core";
import { AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
    providedIn:'root'
})
export class AuthService{
  getInstance() {
    throw new Error('Method not implemented.');
  }
    constructor(private angfAuth: AngularFireAuth){

    }
    async kijelentkezes(): Promise<void> {
      await this.angfAuth.signOut();
  }

  bejelentkezes(email: string, jelszo: string): Promise<any> {
      return this.angfAuth.signInWithEmailAndPassword(email, jelszo);
  }

  regisztracio( email: string, jelszo: string): Promise<any> {
    return this.angfAuth.createUserWithEmailAndPassword(email,jelszo);
}

  authenticated(): boolean {
      return this.angfAuth.authState !== null;
  }

  currentUserObservable(): any {
      return this.angfAuth.authState;
  }
  
   
   
   /* newPassword(newPassword: string) {
    return this.afAuth.currentUser.then((user) => {
      return user.updatePassword(newPassword);
    });
  } */ /* ha egy bizonyos időn túl vagy bejelentkezve akkor újra be kell jelentkezni */

    /*  newEmail(newEmail: string) {
       return this.afAuth.currentUser.then((user) => {
         return user.updateEmail(newEmail);
       });
     } */

    /* updateCurrentUserName(name: string) {
      return this.afAuth.currentUser.then((user) => {
        return user.updateProfile({
          displayName: name
        });
      });
    } */

    /* passwordRemind(email: string): Promise<void> {
      return this.afAuth.sendPasswordResetEmail(email);
    } */ /* jelsző emlékeztető  */

    /*  createUser(email: string, password: string, name?: string) {
       return this.afAuth.createUserWithEmailAndPassword(email, password).then((result) => {
         if (name) {
           this.updateCurrentUserName(name);
         }
         return result.user;
       });
     } */ /* új felhasználó név */



}