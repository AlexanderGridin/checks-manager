import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../api/services/check.service';

@Pipe({
  name: 'productsTotal',
})
export class ProductsTotalPipe implements PipeTransform {
  transform(value: Product[]): number {
    return value.reduce(
      (acc: number, product: Product) => acc + product.productPrice,
      0
    );
  }
}
