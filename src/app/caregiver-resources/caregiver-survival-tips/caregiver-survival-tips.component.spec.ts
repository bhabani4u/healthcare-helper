import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiverSurvivalTipsComponent } from './caregiver-survival-tips.component';

describe('CaregiverSurvivalTipsComponent', () => {
  let component: CaregiverSurvivalTipsComponent;
  let fixture: ComponentFixture<CaregiverSurvivalTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaregiverSurvivalTipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaregiverSurvivalTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
