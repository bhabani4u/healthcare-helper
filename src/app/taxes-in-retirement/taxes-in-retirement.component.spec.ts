import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxesInRetirement } from './taxes-in-retirement.component';

describe('TaxesInRetirement', () => {
  let component: TaxesInRetirement;
  let fixture: ComponentFixture<TaxesInRetirement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxesInRetirement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxesInRetirement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
