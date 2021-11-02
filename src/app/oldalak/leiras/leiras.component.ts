import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { Location } from '@angular/common';
import { Informacio } from 'src/app/shared/models/informacio.model';
import { catchError } from 'rxjs/operators';
import { INFORMACIOK } from 'src/app/shared/database/informacio.database';
import { LeirasokAddComponent } from '../leirasok-add/leirasok-add.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

import Swal from 'sweetalert2'



@Component({
  selector: 'app-leiras',
  templateUrl: './leiras.component.html',
  styleUrls: ['./leiras.component.scss']
})
export class LeirasComponent implements OnInit {
  
  id = '';
  dataNameStr = '';
  inData: Observable<Informacio[]> | null = null;
  errorObject: any;
  informacio = INFORMACIOK;
  
  constructor(private route: ActivatedRoute, private service: BaseService<Informacio>, private location: Location,private dialog: MatDialog) {
  }

  ngOnInit(): void { /* ezzel jelenik meg új lapon */
    const params = this.route.snapshot.params;
    if (params?.id) {
      this.id = params.id;
      this.dataNameStr = params.dataNameStr;
      
     this.get();   
    }
    console.log(this.id, this.dataNameStr);
  }


  close(): void {
    this.location.back();
  }
 get(){
  this.inData = this.service.get('informaciok').pipe(
    catchError(err => {
      this.errorObject = err;
      return throwError(err);
    })
  ); 

} 
delete(){
  this.service.delete('informaciok', this.id )
}

 update(){
 
  const dialogReferenc = this.dialog.open(UpdateComponent, {});
  // tslint:disable-next-line: deprecation
  dialogReferenc.afterClosed().subscribe((informacio: Informacio) => {
    console.log(informacio);
    if (informacio?.title) {
      informacio.id= this.id;
      this.service.update('informaciok',this.id, informacio);
     informacio.id= this.id;
     
    }
  }, err => {
    console.warn(err);
  });
}
 
opensweetalert(){
  Swal.fire({
    title: 'Biztosan törölni szeretné?',

    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Igen szeretném',
    cancelButtonText: 'Nem szeretném'
  }).then((result)=>{
    if (result.value){
   this.delete();
  
    }else if (result.dismiss === Swal.DismissReason.cancel){
      Swal.fire(
        'Kilépés',
        
      )
    }
  })

  

}
 
opensweetalert2(){
  Swal.fire({
    title: 'Biztos frissiteni szeretné?',
 
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Igen szeretném!',
    cancelButtonText: 'Nem szeretném!'
  }).then((result)=>{
    if (result.value){
   this.update();
  
    }else if (result.dismiss === Swal.DismissReason.cancel){
      Swal.fire(
        'Bezárás',
       
      )
    }
  })




}
}
  

