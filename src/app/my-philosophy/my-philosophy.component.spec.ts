import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPhilosophyComponent } from './my-philosophy.component';

describe('MyPhilosophyComponent', () => {
  let component: MyPhilosophyComponent;
  let fixture: ComponentFixture<MyPhilosophyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPhilosophyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPhilosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
