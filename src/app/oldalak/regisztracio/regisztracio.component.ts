import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-regisztracio',
  templateUrl: './regisztracio.component.html',
  styleUrls: ['./regisztracio.component.scss']
})
export class RegisztracioComponent {
  form: FormGroup = new FormGroup({
    felhasznalonev: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),/* Ha több validátort akarunk használni akkor tömben kell megadni, neten utána néézni az email regekszeknek */
    jelszo1: new FormControl('', [Validators.minLength(6), Validators.required]),
    jelszo2: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  hide = true;
  
  hiba = false;

  hibaUzenet = '';
  hibaLista: any = {
    user: () => 'Hibás E-mail cím vagy jelszó.',
    server: () => 'A szolgáltatás nem elérhető.',
    false: () => ''
  }

 
 

  constructor(private rout: Router, private authServ: AuthenticationService) { }
  
  navi(url: string): void{
    this.rout.navigateByUrl(url);

  }
 
  
  @HostListener('document: keydown.enter') onKeydownHandler(){
    this.regisztracio(); /* ha lenyomjuk az enter bejelentkezik */
  }

  regisztracio(): void {
    
    this.authServ.regisztracio(this.form.value.email, this.form.value.jelszo1).then(
      result => {
        console.log(result);
        this.navi('/bejelentkezes');
      },
      (error) => {
        this.hibaUzenet = (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')
          ? this.hibaLista.user() : this.hibaLista.server();
      }
    );

}
}

