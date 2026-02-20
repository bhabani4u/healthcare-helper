import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralHealthAndLifestyleComponent } from './general-health-and-lifestyle.component';

describe('GeneralHealthAndLifestyleComponent', () => {
  let component: GeneralHealthAndLifestyleComponent;
  let fixture: ComponentFixture<GeneralHealthAndLifestyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralHealthAndLifestyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralHealthAndLifestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
