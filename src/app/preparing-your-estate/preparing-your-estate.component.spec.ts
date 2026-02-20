import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparingYourEstateComponent } from './preparing-your-estate.component';

describe('PreparingYourEstateComponent', () => {
  let component: PreparingYourEstateComponent;
  let fixture: ComponentFixture<PreparingYourEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreparingYourEstateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreparingYourEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
