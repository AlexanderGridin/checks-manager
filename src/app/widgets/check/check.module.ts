import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckComponent } from './check.component';
import { ProductsTotalPipe } from 'src/app/pipes/products-total.pipe';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [CheckComponent, ProductsTotalPipe],
  imports: [CommonModule, ProductModule],
  exports: [CheckComponent],
})
export class CheckModule {}
