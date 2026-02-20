import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToChooseAPlanComponent } from './how-to-choose-a-plan.component';

describe('HowToChooseAPlanComponent', () => {
  let component: HowToChooseAPlanComponent;
  let fixture: ComponentFixture<HowToChooseAPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToChooseAPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToChooseAPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
