import { Component } from '@angular/core';
import { KATEGORIAK } from 'src/app/shared/database/kategoria.database';
import { Kategoria } from 'src/app/shared/models/kategoria.model';





@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  {

 kategoriak =   KATEGORIAK;
 title = "Főoldal";


  constructor() { }

 

}
