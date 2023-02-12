import { Component, Input } from '@angular/core';
import { Product } from 'src/app/api/services/check.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() public product!: Product;
}
