import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceOptionsComponent } from './insurance-options.component';

describe('InsuranceOptionsComponent', () => {
  let component: InsuranceOptionsComponent;
  let fixture: ComponentFixture<InsuranceOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
