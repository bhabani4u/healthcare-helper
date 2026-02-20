import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalGlossaryComponent } from './medical-glossary.component';

describe('MedicalGlossaryComponent', () => {
  let component: MedicalGlossaryComponent;
  let fixture: ComponentFixture<MedicalGlossaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalGlossaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalGlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
