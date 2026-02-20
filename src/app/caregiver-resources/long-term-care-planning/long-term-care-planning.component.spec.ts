import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTermCarePlanningComponent } from './long-term-care-planning.component';

describe('LongTermCarePlanningComponent', () => {
  let component: LongTermCarePlanningComponent;
  let fixture: ComponentFixture<LongTermCarePlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongTermCarePlanningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongTermCarePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
