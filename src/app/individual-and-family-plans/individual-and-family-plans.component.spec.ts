import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualAndFamilyPlansComponent } from './individual-and-family-plans.component';

describe('IndividualAndFamilyPlansComponent', () => {
  let component: IndividualAndFamilyPlansComponent;
  let fixture: ComponentFixture<IndividualAndFamilyPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualAndFamilyPlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualAndFamilyPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
