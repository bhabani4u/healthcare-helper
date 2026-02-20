import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForPatientsComponent } from './for-patients.component';

describe('ForPatientsComponent', () => {
  let component: ForPatientsComponent;
  let fixture: ComponentFixture<ForPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForPatientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
