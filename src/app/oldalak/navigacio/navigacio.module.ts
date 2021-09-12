import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigacioComponent } from './navigacio.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu'



@NgModule({
  declarations: [NavigacioComponent],
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule
  ],
  exports: [NavigacioComponent],
})
export class NavigacioModule { }
