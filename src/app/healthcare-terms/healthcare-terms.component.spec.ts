import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareTermsComponent } from './healthcare-terms.component';

describe('HealthcareTermsComponent', () => {
  let component: HealthcareTermsComponent;
  let fixture: ComponentFixture<HealthcareTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthcareTermsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthcareTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
