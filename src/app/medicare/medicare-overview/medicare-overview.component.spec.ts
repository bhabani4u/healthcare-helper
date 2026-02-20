import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicareOverviewComponent } from './medicare-overview.component';

describe('MedicareOverviewComponent', () => {
  let component: MedicareOverviewComponent;
  let fixture: ComponentFixture<MedicareOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicareOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicareOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
