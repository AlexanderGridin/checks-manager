import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksPageComponent } from './checks-page.component';

describe('ChecksPageComponent', () => {
  let component: ChecksPageComponent;
  let fixture: ComponentFixture<ChecksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecksPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
