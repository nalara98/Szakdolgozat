import { Component, OnInit } from '@angular/core';
import { getPersonForm } from 'src/app/shared/form/person.form';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { getAddressForm } from 'src/app/shared/form/address.form';
import { getAuth } from "firebase/auth";
import { updatePassword } from "firebase/auth";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
 hide = true; /* jelszó megjelenítés */
  form: FormGroup | null = null;
  form1: FormGroup = new FormGroup({
    /* Ha több validátort akarunk használni akkor tömben kell megadni, neten utána néézni az email regekszeknek */
    jelszo1: new FormControl('', [Validators.minLength(6), Validators.required]),
  
  });
  constructor(private authServ: AuthService,private rout: Router) { }

  navi(url: string): void{
    this.rout.navigateByUrl(url);

  }
  

 auth = getAuth(); /* ez kell ahhoz hogy az aktuális email jelenjen meg:D  */
 user = this.auth.currentUser;
 

 

 

 if (user:any){
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const password = user.password
 };


  ngOnInit(): void {
    this.intForm();
  }

  intForm(): void{
    this.form = getPersonForm();
    const idFormArray = this.form.get('identifier') as FormArray ;
    (idFormArray.get([1]) as FormGroup).controls.value.setValue(this.user?.email);
  }/* emailhez kell  */

log():void{
  console.log(this.form?.value);
}/* ennek a nevét majd átírni */

addAddress(){
  const FormArray = this.form?.get('address') as FormArray ;
  FormArray.push(getAddressForm());
  /* ha rákantintok a plusz gombra mindig add egy pluszt */
    
}

get getAddres(): FormArray{
  return this.form?.get('address') as FormArray; 
}

removeAddress(index: number): void{
  const FormArray = this.form?.get('address') as FormArray;
    FormArray.removeAt(index);
}

updatPassword(){
  this.navi('/bejelentkezes');
  
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


