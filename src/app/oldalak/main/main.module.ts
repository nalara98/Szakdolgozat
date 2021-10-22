import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MainRoutingModule } from './main-routing.module';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule, MatCardModule, MatRippleModule, MainRoutingModule, ContainerModule, MatToolbarModule
  ],
  exports: [MainComponent]
})
export class MainModule { }