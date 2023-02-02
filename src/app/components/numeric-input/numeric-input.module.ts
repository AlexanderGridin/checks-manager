import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericInputComponent } from './numeric-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [NumericInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [NumericInputComponent],
})
export class NumericInputModule {}
