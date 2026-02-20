import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingOptionsForOlderAdultsComponent } from './housing-options-for-older-adults.component';

describe('HousingOptionsForOlderAdultsComponent', () => {
  let component: HousingOptionsForOlderAdultsComponent;
  let fixture: ComponentFixture<HousingOptionsForOlderAdultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingOptionsForOlderAdultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingOptionsForOlderAdultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
