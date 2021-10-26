import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JatekComponent } from './jatek.component';
import { JatekRoutingMOdule } from './jatek-routing.module';
import { NavigacioModule } from '../navigacio/navigacio.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';





@NgModule({
  declarations: [JatekComponent],
  imports: [
    CommonModule,  NavigacioModule, JatekRoutingMOdule, MatToolbarModule, MatIconModule, MatButtonModule, MatIconModule, 

    MatDialogModule, MatRadioModule
  ],
  exports: [JatekComponent]
})
export class JatekModule { }



