import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicareInsuranceComponent } from './medicare-insurance.component';

describe('MedicareComponent', () => {
  let component: MedicareInsuranceComponent;
  let fixture: ComponentFixture<MedicareInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicareInsuranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicareInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
