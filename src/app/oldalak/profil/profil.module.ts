import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContainerModule } from 'src/app/shared/components/container.module';
import {MatListModule} from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil.component';

@NgModule({
  declarations: [ProfilComponent],
  imports: [
    CommonModule,
  ProfileRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule, MatInputModule, ReactiveFormsModule,
    ContainerModule,
    MatListModule,
    MatRadioModule,
    MatDatepickerModule,
   
  ], 
  exports: [ProfilComponent]
})
export class ProfilModule { }
