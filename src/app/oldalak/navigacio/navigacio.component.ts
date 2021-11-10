import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { INFORMACIOK } from 'src/app/shared/database/informacio.database';
import { KATEGORIAK } from 'src/app/shared/database/kategoria.database';
import { Kategoria } from 'src/app/shared/models/kategoria.model';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
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
