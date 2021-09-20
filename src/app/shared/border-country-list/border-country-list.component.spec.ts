import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderCountryListComponent } from './border-country-list.component';

describe('BorderCountryListComponent', () => {
  let component: BorderCountryListComponent;
  let fixture: ComponentFixture<BorderCountryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderCountryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderCountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
