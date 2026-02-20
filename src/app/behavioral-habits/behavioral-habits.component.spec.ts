import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehavioralHabitsComponent } from './behavioral-habits.component';

describe('BehavioralHabitsComponent', () => {
  let component: BehavioralHabitsComponent;
  let fixture: ComponentFixture<BehavioralHabitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehavioralHabitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehavioralHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
