import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiverResourcesComponent } from './caregiver-resources.component';

describe('CaregiverResourcesComponent', () => {
  let component: CaregiverResourcesComponent;
  let fixture: ComponentFixture<CaregiverResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaregiverResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaregiverResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
