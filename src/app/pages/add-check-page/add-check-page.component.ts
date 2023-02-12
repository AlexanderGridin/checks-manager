import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  Form,
  FormArray,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { debounceTime, Subject, takeUntil, tap } from 'rxjs';
import { CheckDto, CheckService } from 'src/app/api/services/check.service';
import { SingleSelectData } from 'src/app/components/single-select/single-select.component';

const stores = [
  {
    name: 'АТБ',
    value: 'АТБ',
  },
  {
    name: 'СІЛЬПО',
    value: 'СІЛЬПО',
  },
  {
    name: 'ГРОШ',
    value: 'ГРОШ',
  },
  {
    name: 'МАКДОНАЛЬДС',
    value: 'МАКДОНАЛЬДС',
  },
  {
    name: 'РОШЕН',
    value: 'РОШЕН',
  },
];

@Component({
  selector: 'add-check-page',
  templateUrl: './add-check-page.component.html',
  styleUrls: ['./add-check-page.component.scss'],
})
export class AddCheckPageComponent implements OnInit, OnDestroy {
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;

  public readonly form = new FormGroup({
    checkDate: new FormControl<Date>(new Date(), [Validators.required]),
    store: new FormControl<string>('', [Validators.required]),
    products: new FormArray([this.createProductFormGroup()]),
  });

  public readonly stores = stores;
  private readonly destroy$ = new Subject();
  public totalAmount = 0;

  constructor(private readonly service: CheckService) {}

  public ngOnInit(): void {
    this.form
      .get('products')
      ?.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(500))
      .subscribe((value) => {
        const totalAmount = value.reduce((acc, productValue) => {
          return acc + (productValue['productPrice'] ?? 0);
        }, 0);
        this.totalAmount = Number(totalAmount.toFixed(2));
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  public handleSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    const checkToSave: Omit<CheckDto, '_id'> = {
      checkDate:
        this.form.value.checkDate?.toLocaleDateString() ??
        new Date().toLocaleDateString(),
      store: this.form.value.store ?? '',
      products:
        this.form.value.products?.map((product) => ({
          name: product.productName,
          price: product.productPrice,
        })) ?? [],
    };

    this.service
      .addCheck(checkToSave)
      .pipe(
        tap(() => {
          this.formDirective.resetForm({
            checkDate: new Date(),
          });

          this.form.controls.products.clear();
          this.form.controls.products.push(this.createProductFormGroup());
        })
      )
      .subscribe();
  }

  public get productsFormArray(): FormArray {
    return this.form.get('products') as FormArray;
  }

  public get totalProducts(): number {
    return (this.form.get('products') as FormArray).controls.length;
  }

  public addProductFormGroup(): void {
    this.form.controls.products.push(this.createProductFormGroup());
  }

  public removeProductFormGroup(index: number): void {
    this.form.controls.products.removeAt(index);
  }

  private createProductFormGroup(): FormGroup {
    const formGroup = new FormGroup({
      productName: new FormControl<string>('', [Validators.required]),
      productPrice: new FormControl<number | null>(null, [Validators.required]),
    });

    return formGroup;
  }
}
