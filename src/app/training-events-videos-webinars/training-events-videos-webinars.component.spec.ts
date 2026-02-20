import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingEventsVideosWebinarsComponent } from './training-events-videos-webinars.component';

describe('TrainingEventsVideosWebinarsComponent', () => {
  let component: TrainingEventsVideosWebinarsComponent;
  let fixture: ComponentFixture<TrainingEventsVideosWebinarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingEventsVideosWebinarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingEventsVideosWebinarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
