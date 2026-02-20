import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToMaximizeSocialSecurityComponent } from './how-to-maximize-social-security.component';

describe('HowToMaximizeSocialSecurityComponent', () => {
  let component: HowToMaximizeSocialSecurityComponent;
  let fixture: ComponentFixture<HowToMaximizeSocialSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToMaximizeSocialSecurityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToMaximizeSocialSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
