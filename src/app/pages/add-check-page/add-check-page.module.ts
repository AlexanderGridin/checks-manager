import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCheckPageComponent } from './add-check-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputModule } from 'src/app/components/text-input/text-input.module';

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
  ],
})
export class AddCheckPageModule {}