import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BejelentkezesComponent } from './bejelentkezes.component';
import {MatButtonModule} from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [BejelentkezesComponent],
  imports: [
    CommonModule, MatCardModule, MatButtonModule
  ],
  exports: [BejelentkezesComponent],
})
export class BejelentkezesModule { }
