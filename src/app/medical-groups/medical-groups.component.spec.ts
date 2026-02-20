import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalGroupsComponent } from './medical-groups.component';

describe('MedicalGroupsComponent', () => {
  let component: MedicalGroupsComponent;
  let fixture: ComponentFixture<MedicalGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
