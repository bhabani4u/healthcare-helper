import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHealthcareHelpersComponent } from './about-healthcare-helpers.component';

describe('AboutHealthcareHelpersComponent', () => {
  let component: AboutHealthcareHelpersComponent;
  let fixture: ComponentFixture<AboutHealthcareHelpersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHealthcareHelpersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHealthcareHelpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
