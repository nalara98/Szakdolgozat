import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-bejelentkezes',
  templateUrl: './bejelentkezes.component.html',
  styleUrls: ['./bejelentkezes.component.scss']
})
export class BejelentkezesComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email:new FormControl('', [Validators.email, Validators.required]),
    jelszo: new FormControl('', [Validators.minLength(6), Validators.required])
    
  });

  hibaUzenet = '';
  hibaLista: any = {
    user: () => 'Hibás E-mail cím vagy jelszó.',
    server: () => 'A szolgáltatás nem elérhető.',
    false: () => ''
  }; /* hiba kezelés */

  @HostListener('document: keydown.enter') onKeydownHandler(){
    this.bejelentkezes(); /* ha lenyomjuk az enter bejelentkezik */
  }

  constructor(private rout: Router, private authServ: AuthService) { }

  ngOnInit():void{ /* rákényszerítjük a felhasználót hogy újra bejelentkezen. */
    this.authServ.kijelentkezes();

  }

  navi(url: string): void{
    this.rout.navigateByUrl(url);

  }


  bejelentkezes(): void {
    if (this.form.invalid) {
      return;
    }
    this.authServ.bejelentkezes(this.form.value.email, this.form.value.jelszo).then(
      result => {
        console.log(result);
        this.navi('/fooldal/main');
      },
      (error) => {
        this.hibaUzenet = (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')
          ? this.hibaLista.user() : this.hibaLista.server();
      }
    );
  }

  
  }
  



 


 

