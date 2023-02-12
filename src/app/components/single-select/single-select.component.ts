import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

export interface SingleSelectData {
  name: string;
  value: any;
}

@Component({
  selector: 'single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss'],
})
export class SingleSelectComponent {
  @Input() public label!: string;
  @Input() public control!: FormControl;
  @Input() public data: SingleSelectData[] = [];
}
