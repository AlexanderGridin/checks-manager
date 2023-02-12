import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCheckPageComponent } from './add-check-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputModule } from 'src/app/components/text-input/text-input.module';
import { CardModule } from 'src/app/components/card/card.module';
import { NumericInputModule } from 'src/app/components/numeric-input/numeric-input.module';
import { DatePickerModule } from 'src/app/components/date-picker/date-picker.module';
import { SingleSelectModule } from 'src/app/components/single-select/single-select.module';

const routes: Routes = [
  {
    path: '',
    component: AddCheckPageComponent,
  },
];

@NgModule({
  declarations: [AddCheckPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TextInputModule,
    CardModule,
    NumericInputModule,
    DatePickerModule,
    SingleSelectModule,
  ],
})
export class AddCheckPageModule {}
