import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JatekComponent } from './jatek.component';
import { JatekRoutingMOdule } from './jatek-routing.module';
import { NavigacioModule } from '../navigacio/navigacio.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatAutocompleteModule } from '@angular/material/autocomplete';





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



