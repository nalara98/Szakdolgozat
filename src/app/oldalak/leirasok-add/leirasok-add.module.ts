import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeirasokAddComponent } from './leirasok-add.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [LeirasokAddComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatDialogModule, MatFormFieldModule
  ],
  exports: [LeirasokAddComponent],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },],
  entryComponents: [LeirasokAddComponent]
})
export class LeirasokAddModule { }
