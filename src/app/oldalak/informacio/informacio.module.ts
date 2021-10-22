import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacioComponent } from './informacio.component';
import {MatCardModule} from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [InformacioComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule 
  ],
  exports: [InformacioComponent]
})
export class InformacioModule { }
