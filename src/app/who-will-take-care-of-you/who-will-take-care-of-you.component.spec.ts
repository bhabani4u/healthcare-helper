import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWillTakeCareOfYouComponent } from './who-will-take-care-of-you.component';

describe('WhoWillTakeCareOfYouComponent', () => {
  let component: WhoWillTakeCareOfYouComponent;
  let fixture: ComponentFixture<WhoWillTakeCareOfYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoWillTakeCareOfYouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoWillTakeCareOfYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
