import { Component, Input, OnInit } from '@angular/core';
import { Kategoria } from 'src/app/shared/models/kategoria.model';

@Component({
  selector: 'app-navigacio',
  templateUrl: './navigacio.component.html',
  styleUrls: ['./navigacio.component.scss']
})
export class NavigacioComponent implements OnInit {
  sKategoriaTitle?: string;
  @Input() kivalasztottKategoria?: string;
  @Input() kategoriak: Kategoria[] = []; /* üres tömb az értékee */

  constructor() { }

  ngOnInit(): void {
  }

}
