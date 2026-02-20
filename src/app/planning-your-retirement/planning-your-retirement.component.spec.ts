import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningYourRetirementComponent } from './planning-your-retirement.component';

describe('PlanningYourRetirementComponent', () => {
  let component: PlanningYourRetirementComponent;
  let fixture: ComponentFixture<PlanningYourRetirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanningYourRetirementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningYourRetirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
