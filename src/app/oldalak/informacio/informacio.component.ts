import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Informacio } from 'src/app/shared/models/informacio.model';

@Component({
  selector: 'app-informacio',
  templateUrl: './informacio.component.html',
  styleUrls: ['./informacio.component.scss']
})
export class InformacioComponent implements OnInit {

  @Input() informacio: Informacio = {} as any;

  @Output() getInformacio = new EventEmitter<Informacio>(); 
  


  constructor() { }

  ngOnInit(): void {
  } /* unit teszt */
  sum(a:any,b:any)
  {
    return a + b ;
  }
  

}
