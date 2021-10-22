import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisztracioComponent } from './regisztracio.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RegisztracioRoutingModule } from './regisztracio-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';





@NgModule({
  declarations: [RegisztracioComponent],
  imports: [
    CommonModule, MatCardModule, MatButtonModule,FormsModule, ReactiveFormsModule, RegisztracioRoutingModule
   ,MatInputModule,  MatChipsModule, MatFormFieldModule
  ],

})
export class RegisztracioModule { }
