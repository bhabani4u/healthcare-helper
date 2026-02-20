import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalIndustryOverviewComponent } from './medical-industry-overview.component';

describe('MedicalIndustryOverviewComponent', () => {
  let component: MedicalIndustryOverviewComponent;
  let fixture: ComponentFixture<MedicalIndustryOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalIndustryOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalIndustryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
