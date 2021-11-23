import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooldalComponent } from './fooldal.component';
import { NavigacioModule } from '../navigacio/navigacio.module';
import { FooldalRoutingModule } from './fooldal-routing.module';
import {  MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container.module';




@NgModule({
  declarations: [FooldalComponent],
  imports: [
    CommonModule,  NavigacioModule,  FooldalRoutingModule,
    
    
    MatRippleModule, MatToolbarModule, ContainerModule
  
    
  ],
  exports: [FooldalComponent]
})
export class FooldalModule { }
