import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualFamilyHealthInsuranceComponent } from './individual-family-health-insurance.component';

describe('IndividualFamilyHealthInsuranceComponent', () => {
  let component: IndividualFamilyHealthInsuranceComponent;
  let fixture: ComponentFixture<IndividualFamilyHealthInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualFamilyHealthInsuranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualFamilyHealthInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
