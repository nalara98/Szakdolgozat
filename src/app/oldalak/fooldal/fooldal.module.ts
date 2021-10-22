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
import { LeirasokAddModule } from '../leirasok-add/leirasok-add.module';
import { FooldalRoutingModule } from './fooldal-routing.module';
import { MatRipple, MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';








@NgModule({
  declarations: [FooldalComponent],
  imports: [
    CommonModule,  NavigacioModule,  FooldalRoutingModule,
    
    
    MatRippleModule, MatToolbarModule, ContainerModule
  
    
  ],
  exports: [FooldalComponent]
})
export class FooldalModule { }
