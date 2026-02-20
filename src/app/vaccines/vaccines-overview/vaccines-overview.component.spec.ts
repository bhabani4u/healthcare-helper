import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinesOverviewComponent } from './vaccines-overview.component';

describe('VaccinesOverviewComponent', () => {
  let component: VaccinesOverviewComponent;
  let fixture: ComponentFixture<VaccinesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaccinesOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccinesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
