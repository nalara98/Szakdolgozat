import { Component, OnDestroy, OnInit } from '@angular/core';
import { INFORMACIOK } from 'src/app/shared/database/informacio.database';
import { KATEGORIAK } from 'src/app/shared/database/kategoria.database';
import {MatDialog} from '@angular/material/dialog'
import { LeirasokAddComponent } from '../leirasok-add/leirasok-add.component';

@Component({
  selector: 'app-fooldal',
  templateUrl: './fooldal.component.html',
  styleUrls: ['./fooldal.component.scss']
})
export class FooldalComponent implements OnInit, OnDestroy {
  kategoriak = KATEGORIAK;
  informaciok = INFORMACIOK;
  

  kategoria? = '';

  oldal = 'fooldal';
  

  constructor( private dialog: MatDialog ) { 
    
    
  }

  ngOnInit(): void {
    this.kategoria = 'informacio';
    
  }

  ngOnDestroy(): void {
    delete this.kategoria;
  }

  openLeirasok(): void {
    const leirasRef = this.dialog.open(LeirasokAddComponent, {});
    // tslint:disable-next-line: deprecation
    leirasRef.afterClosed().subscribe(result => {
      if (result && result.title) {
        this.informaciok.push(result);
      }
    });
  }

}
