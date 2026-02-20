import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForProvidersComponent } from './for-providers.component';

describe('ForProvidersComponent', () => {
  let component: ForProvidersComponent;
  let fixture: ComponentFixture<ForProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForProvidersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
