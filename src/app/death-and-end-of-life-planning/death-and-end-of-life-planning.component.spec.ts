import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathAndEndOfLifePlanningComponent } from './death-and-end-of-life-planning.component';

describe('DeathAndEndOfLifePlanningComponent', () => {
  let component: DeathAndEndOfLifePlanningComponent;
  let fixture: ComponentFixture<DeathAndEndOfLifePlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeathAndEndOfLifePlanningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeathAndEndOfLifePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
