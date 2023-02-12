import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecksSearchComponent } from './checks-search.component';
import { DatePickerModule } from 'src/app/components/date-picker/date-picker.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChecksSearchComponent],
  imports: [CommonModule, DatePickerModule, ReactiveFormsModule],
  exports: [ChecksSearchComponent],
})
export class ChecksSearchModule {}
