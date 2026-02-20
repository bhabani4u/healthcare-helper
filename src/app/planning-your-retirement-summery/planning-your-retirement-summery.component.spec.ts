import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningYourRetirementSummeryComponent } from './planning-your-retirement-summery.component';

describe('PlanningYourRetirementSummeryComponent', () => {
  let component: PlanningYourRetirementSummeryComponent;
  let fixture: ComponentFixture<PlanningYourRetirementSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanningYourRetirementSummeryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningYourRetirementSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
