import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacioComponent } from './informacio.component';
import {MatCardModule} from '@angular/material/card'




@NgModule({
  declarations: [InformacioComponent],
  imports: [
    CommonModule, MatCardModule
  ],
  exports: [InformacioComponent]
})
export class InformacioModule { }
