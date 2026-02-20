import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHistoryOfVaccinesComponent } from './the-history-of-vaccines.component';

describe('TheHistoryOfVaccinesComponent', () => {
  let component: TheHistoryOfVaccinesComponent;
  let fixture: ComponentFixture<TheHistoryOfVaccinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheHistoryOfVaccinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheHistoryOfVaccinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
