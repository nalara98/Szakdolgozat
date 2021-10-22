import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigacioComponent } from './navigacio.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu'
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NavigacioComponent],
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, RouterModule
  , MatSlideToggleModule, FormsModule
  ],
  exports: [NavigacioComponent],
})
export class NavigacioModule { }
