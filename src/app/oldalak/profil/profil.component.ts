import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { getAuth } from "firebase/auth";
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

AngularFireModule.initializeApp(environment.firebaseConfig)

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
 hide = true; /* jelszó megjelenítés */
  
  form1: FormGroup = new FormGroup({
    /* Ha több validátort akarunk használni akkor tömben kell megadni, neten utána néézni az email regekszeknek */
    jelszo1: new FormControl('', [Validators.minLength(6), Validators.required]),
  
  });
  constructor(private authServ: AuthenticationService,private rout: Router) { }

  navi(url: string): void{
    this.rout.navigateByUrl(url);

  }
  
 auth = getAuth();
 user = this.auth.currentUser;
 
  if (user:any){
  
   const email = user.email;
  const password = user.password
  
 };

  ngOnInit(): void {
    this.currentEmail();
  }

  currentEmail(): void{
  this.user?.email
  }



updatPassword(){
   
  if (this.form1.invalid) {
    return;
  }
  this.authServ.newPassword( this.form1.value.jelszo1).then(
    result => {
      console.log(result);
      this.navi('/bejelentkezes');
    
    })




}

}


