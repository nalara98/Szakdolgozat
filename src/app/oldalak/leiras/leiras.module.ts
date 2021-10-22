import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LeirasRoutingModule} from './leiras-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeirasComponent } from './leiras.component';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';






/* import { ContainerModule } from 'src/app/shared/components/container/container.module'; */
@NgModule({
  declarations: [LeirasComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    LeirasRoutingModule, MatCardModule, MatButtonModule, MatIconModule, MatTabsModule, MatFormFieldModule, MatInputModule,  ContainerModule, 
 MatDialogModule,

    MatToolbarModule,
  
  ],
  exports: [LeirasComponent],
})
export class LeirasModule { }