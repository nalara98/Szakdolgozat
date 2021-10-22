import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BejelentkezesComponent } from './bejelentkezes.component';
import {MatButtonModule} from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { BejelentkezesRoutingModule } from './bejelentkezes-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [BejelentkezesComponent],
  imports: [
    CommonModule,BejelentkezesRoutingModule , MatCardModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule
  ]
})
export class BejelentkezesModule { }