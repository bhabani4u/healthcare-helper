import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherFormsOfHealthcareComponent } from './other-forms-of-healthcare.component';

describe('OtherFormsOfHealthcareComponent', () => {
  let component: OtherFormsOfHealthcareComponent;
  let fixture: ComponentFixture<OtherFormsOfHealthcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherFormsOfHealthcareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherFormsOfHealthcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
