import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyHomelessnessIsSoPervasiveComponent } from './why-homelessness-is-so-pervasive.component';

describe('WhyHomelessnessIsSoPervasiveComponent', () => {
  let component: WhyHomelessnessIsSoPervasiveComponent;
  let fixture: ComponentFixture<WhyHomelessnessIsSoPervasiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyHomelessnessIsSoPervasiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyHomelessnessIsSoPervasiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
