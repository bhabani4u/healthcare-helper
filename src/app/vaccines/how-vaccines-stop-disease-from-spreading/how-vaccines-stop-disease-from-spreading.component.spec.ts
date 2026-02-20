import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowVaccinesStopDiseaseFromSpreadingComponent } from './how-vaccines-stop-disease-from-spreading.component';

describe('HowVaccinesStopDiseaseFromSpreadingComponent', () => {
  let component: HowVaccinesStopDiseaseFromSpreadingComponent;
  let fixture: ComponentFixture<HowVaccinesStopDiseaseFromSpreadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowVaccinesStopDiseaseFromSpreadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowVaccinesStopDiseaseFromSpreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
