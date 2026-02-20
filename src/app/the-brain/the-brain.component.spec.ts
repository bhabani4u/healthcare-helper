import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBrainComponent } from './the-brain.component';

describe('TheBrainComponent', () => {
  let component: TheBrainComponent;
  let fixture: ComponentFixture<TheBrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBrainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheBrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
