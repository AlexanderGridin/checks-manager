import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChecksSearchPayload } from 'src/app/api/services/check.service';

@Component({
  selector: 'checks-search',
  templateUrl: './checks-search.component.html',
  styleUrls: ['./checks-search.component.scss'],
})
export class ChecksSearchComponent {
  @Output() public onSubmit = new EventEmitter<ChecksSearchPayload>();

  public readonly form = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  public handleSubmit(): void {
    this.onSubmit.emit({
      start: this.form.value.start?.toLocaleDateString() ?? null,
      end: this.form.value.end?.toLocaleDateString() ?? null,
    });
  }
}
