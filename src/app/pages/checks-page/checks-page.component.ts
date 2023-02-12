import { Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import {
  Check,
  CheckService,
  ChecksSearchPayload,
  Product,
} from 'src/app/api/services/check.service';

@Component({
  selector: 'app-checks-page',
  templateUrl: './checks-page.component.html',
  styleUrls: ['./checks-page.component.scss'],
})
export class ChecksPageComponent implements OnInit {
  public isLoading = true;
  public checks: Check[] = [];

  public totalChecks!: number;
  public totalAmount = 0;

  constructor(private readonly service: CheckService) {}

  public ngOnInit(): void {
    this.service
      .getTotalChecks()
      .pipe(
        tap((totalChecks) => {
          this.totalChecks = totalChecks;
          this.isLoading = false;
        }),
        catchError(() => of(0))
      )
      .subscribe();
  }

  public handleSearchSubmit(params: ChecksSearchPayload): void {
    this.service
      .search(params)
      .pipe(
        catchError(() => of([])),
        tap((checks: Check[]) => {
          this.checks = checks;
          this.totalAmount = this.countChecksTotalAmount(checks);
          this.isLoading = false;
        })
      )
      .subscribe();
  }

  private countChecksTotalAmount(checks: Check[]): number {
    return Number(
      checks
        .reduce((acc: number, check: Check) => {
          return (
            acc +
            check.products.reduce((innerAcc: number, product: Product) => {
              return innerAcc + product.productPrice;
            }, 0)
          );
        }, 0)
        .toFixed(2)
    );
  }

  public removeCheck(check: Check): void {
    console.log(check);
    this.service
      .deleteCheck(check.id)
      .pipe(tap((checks: Check[]) => (this.checks = checks)))
      .subscribe();
  }
}
