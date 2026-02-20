import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentCancerDisabilityComponent } from './accident-cancer-disability.component';

describe('AccidentCancerDisabilityComponent', () => {
  let component: AccidentCancerDisabilityComponent;
  let fixture: ComponentFixture<AccidentCancerDisabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccidentCancerDisabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccidentCancerDisabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
