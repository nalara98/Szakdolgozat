import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JatekComponent } from './jatek.component';
import { JatekRoutingMOdule } from './jatek-routing.module';
import { NavigacioModule } from '../navigacio/navigacio.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import {  MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {  MatRadioModule } from '@angular/material/radio';






@NgModule({
  declarations: [JatekComponent],
  imports: [
    CommonModule,  NavigacioModule, JatekRoutingMOdule, MatToolbarModule, MatIconModule, MatButtonModule, MatIconModule, 

    MatDialogModule, MatRadioModule
  ],
  exports: [JatekComponent],
  providers:[MatDialog]
})
export class JatekModule { }



