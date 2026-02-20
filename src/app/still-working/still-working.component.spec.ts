import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StillWorkingComponent } from './still-working.component';

describe('StillWorkingComponent', () => {
  let component: StillWorkingComponent;
  let fixture: ComponentFixture<StillWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StillWorkingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StillWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
