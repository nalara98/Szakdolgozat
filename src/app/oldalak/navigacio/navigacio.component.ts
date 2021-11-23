import { Component }from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { KATEGORIAK } from 'src/app/shared/database/kategoria.database';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ThemeService } from 'src/app/services/thema.service';


@Component({
  selector: 'app-navigacio',
  templateUrl: './navigacio.component.html',
  styleUrls: ['./navigacio.component.scss']
})
export class NavigacioComponent  {
  kategoriak =   KATEGORIAK;
  
    title = 'dark-theme-yt';
    isDarkMode!: boolean;
    showFiller = false;  

  constructor(private rout: Router,  private authServ: AuthenticationService,private breakpointObserver: BreakpointObserver, private themeService: ThemeService) {

    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
   }

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update('light-mode')
      : this.themeService.update('dark-mode');
  }

  kijelentkezes(): void{
    this.authServ.kijelentkezes();/* ez a kijelentkezés függvény a serverből jön  */
    this.rout.navigateByUrl('bejelentkezes');

  }

}
