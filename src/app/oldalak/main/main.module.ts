import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MainRoutingModule } from './main-routing.module';
import { ContainerModule } from 'src/app/shared/components/container.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list'



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule, MatCardModule, MatRippleModule, MainRoutingModule, ContainerModule, MatToolbarModule, MatGridListModule 
  ],
  exports: [MainComponent]
})
export class MainModule { }
