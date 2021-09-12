import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisztracioComponent } from './regisztracio.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [RegisztracioComponent],
  imports: [
    CommonModule, MatCardModule, MatButtonModule
  ],
  exports:[RegisztracioComponent],
})
export class RegisztracioModule { }
