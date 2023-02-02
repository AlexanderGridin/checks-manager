import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-check-page',
  templateUrl: './add-check-page.component.html',
  styleUrls: ['./add-check-page.component.scss'],
})
export class AddCheckPageComponent {
  public readonly form = new FormGroup({
    productName: new FormControl('', [Validators.required]),
  });

  public handleSubmit(): void {
    console.log(this.form.value);
  }
}
