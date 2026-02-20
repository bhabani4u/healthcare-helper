import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowTheCovidVaccineWorksComponent } from './how-the-covid-vaccine-works.component';

describe('HowTheCovidVaccineWorksComponent', () => {
  let component: HowTheCovidVaccineWorksComponent;
  let fixture: ComponentFixture<HowTheCovidVaccineWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowTheCovidVaccineWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowTheCovidVaccineWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
