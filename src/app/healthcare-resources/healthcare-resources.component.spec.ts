import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareResourcesComponent } from './healthcare-resources.component';

describe('HealthcareResourcesComponent', () => {
  let component: HealthcareResourcesComponent;
  let fixture: ComponentFixture<HealthcareResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthcareResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthcareResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
