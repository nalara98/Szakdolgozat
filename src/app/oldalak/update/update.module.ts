import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule, MatButtonModule, MatDialogModule, FormsModule, ReactiveFormsModule,
    MatInputModule, MatFormFieldModule],
  exports: [UpdateComponent],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },],
})
export class UpdateModule { }
