import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicareCalculatorsComponent } from './medicare-calculators.component';

describe('MedicareCalculatorsComponent', () => {
  let component: MedicareCalculatorsComponent;
  let fixture: ComponentFixture<MedicareCalculatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicareCalculatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicareCalculatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
