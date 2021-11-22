import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError,  debounceTime, map, startWith } from 'rxjs/operators';
import { BaseService } from 'src/app/services/tanacsok.service';
import { Informacio } from 'src/app/shared/models/informacio.model';
import { LeirasokAddComponent } from '../leirasok-add/leirasok-add.component';


@Component({
  selector: 'app-informaciok-list',
  templateUrl: './informaciok-list.component.html',
  styleUrls: ['./informaciok-list.component.scss']
})
export class InformaciokListComponent implements OnInit {
  title='Informacio';
  lista$: Observable<Informacio[]> | null = null; /*$ jelölés jelentése nem egy sima lista hanem egy observable  */

  error = null;
  id = '';
  
componantName = "informacioklist"
  constructor(private service: BaseService<Informacio>, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
        this.get()
  } 
 
  get(): void {
    this.error = null;
    this.lista$ = this.service.get('informaciok').pipe(
      catchError(err => {
        this.error = err;
        return throwError(err);
      })
    ); 
  }


  onGetInformacio(event: Informacio):void{
    this.router.navigateByUrl('/leiras/informacio/' + event.id);


  } 

  delete(){
    this.service.delete('informaciok', this.id )
  }



openLeirasok(): void {
  const dialogReferenc = this.dialog.open(LeirasokAddComponent, {});

  dialogReferenc.afterClosed().subscribe((informacio: Informacio) => {
    console.log(informacio);
    if (informacio?.title) {
      this.service.add('informaciok', informacio);
    }
  }, err => {
    console.warn(err);
  });
}

}
