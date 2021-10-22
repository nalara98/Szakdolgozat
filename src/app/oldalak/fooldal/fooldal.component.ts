import { Component, OnDestroy, OnInit } from '@angular/core';
import { KATEGORIAK } from 'src/app/shared/database/kategoria.database';


@Component({
  selector: 'app-fooldal',
  templateUrl: './fooldal.component.html',
  styleUrls: ['./fooldal.component.scss']
})
export class FooldalComponent  {
  
  
  kategoriak =   KATEGORIAK;
  title = "Főoldal";
  constructor() { }
    
}
