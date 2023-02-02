import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecksPageComponent } from './checks-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChecksPageComponent,
  },
];

@NgModule({
  declarations: [ChecksPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ChecksPageModule {}
