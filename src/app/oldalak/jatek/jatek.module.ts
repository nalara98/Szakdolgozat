import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JatekComponent } from './jatek.component';
import { JatekRoutingMOdule } from './jatek-routing.module';
import { NavigacioModule } from '../navigacio/navigacio.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [JatekComponent],
  imports: [
    CommonModule,  NavigacioModule, JatekRoutingMOdule, MatToolbarModule, MatIconModule,

    MatDialogModule
  ],
  exports: [JatekComponent]
})
export class JatekModule { }



