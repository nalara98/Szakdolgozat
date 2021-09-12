import { Component, Input, OnInit } from '@angular/core';
import { Informacio } from 'src/app/shared/models/informacio.model';

@Component({
  selector: 'app-informacio',
  templateUrl: './informacio.component.html',
  styleUrls: ['./informacio.component.scss']
})
export class InformacioComponent implements OnInit {

  @Input() informacio?: Informacio ;


  constructor() { }

  ngOnInit(): void {
  }

}
