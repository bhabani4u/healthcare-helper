import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToWorkWithAPharmacistComponent } from './how-to-work-with-a-pharmacist.component';

describe('HowToWorkWithAPharmacistComponent', () => {
  let component: HowToWorkWithAPharmacistComponent;
  let fixture: ComponentFixture<HowToWorkWithAPharmacistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToWorkWithAPharmacistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToWorkWithAPharmacistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
