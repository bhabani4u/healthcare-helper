import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereToGoForHousingAssistanceComponent } from './where-to-go-for-housing-assistance.component';

describe('WhereToGoForHousingAssistanceComponent', () => {
  let component: WhereToGoForHousingAssistanceComponent;
  let fixture: ComponentFixture<WhereToGoForHousingAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhereToGoForHousingAssistanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhereToGoForHousingAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
