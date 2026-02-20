import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeInsuranceTermsComponent } from './life-insurance-terms.component';

describe('LifeInsuranceTermsComponent', () => {
  let component: LifeInsuranceTermsComponent;
  let fixture: ComponentFixture<LifeInsuranceTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeInsuranceTermsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeInsuranceTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
