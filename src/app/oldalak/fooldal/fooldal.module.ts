import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooldalComponent } from './fooldal.component';
import { MainModule } from '../main/main.module';
import { InformacioModule } from '../informacio/informacio.module';
import { BejelentkezesModule } from '../bejelentkezes/bejelentkezes.module';
import { JatekModule } from '../jatek/jatek.module';
import { NavigacioModule } from '../navigacio/navigacio.module';
import { RegisztracioModule } from '../regisztracio/regisztracio.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';








@NgModule({
  declarations: [FooldalComponent],
  imports: [
    CommonModule, FormsModule, MainModule,InformacioModule, BejelentkezesModule, JatekModule, NavigacioModule, RegisztracioModule, MatIconModule,MatButtonModule, MatDialogModule
    
  ],
  exports: [FooldalComponent]
})
export class FooldalModule { }
