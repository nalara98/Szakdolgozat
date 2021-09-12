import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JatekComponent } from './jatek.component';



@NgModule({
  declarations: [JatekComponent],
  imports: [
    CommonModule
  ],
  exports: [JatekComponent]
})
export class JatekModule { }
