import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Informacio } from 'src/app/shared/models/informacio.model';

@Component({
  selector: 'app-informacio',
  templateUrl: './informacio.component.html',
  styleUrls: ['./informacio.component.scss']
})
export class InformacioComponent implements OnInit {

  @Input() informacio: Informacio = {} as any;
  @Input() hasAction = true;
  @Output() callFav = new EventEmitter<Informacio>();
  @Output() getInformacio = new EventEmitter<Informacio>();
  


  constructor() { }

  ngOnInit(): void {
  }
  

}
