import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCheckPageComponent } from './add-check-page.component';

describe('AddCheckPageComponent', () => {
  let component: AddCheckPageComponent;
  let fixture: ComponentFixture<AddCheckPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCheckPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCheckPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
