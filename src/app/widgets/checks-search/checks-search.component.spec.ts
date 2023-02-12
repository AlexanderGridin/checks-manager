import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksSearchComponent } from './checks-search.component';

describe('ChecksSearchComponent', () => {
  let component: ChecksSearchComponent;
  let fixture: ComponentFixture<ChecksSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecksSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecksSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
