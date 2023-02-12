import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Check } from 'src/app/api/services/check.service';

@Component({
  selector: 'check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
})
export class CheckComponent {
  @Input() public check!: Check;
  @Output() public onRemoveCheck = new EventEmitter<Check>();

  public removeCheck(): void {
    this.onRemoveCheck.emit(this.check);
  }
}
