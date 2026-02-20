import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Turning65Component } from './turning-65.component';

describe('Turning65Component', () => {
  let component: Turning65Component;
  let fixture: ComponentFixture<Turning65Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Turning65Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Turning65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
