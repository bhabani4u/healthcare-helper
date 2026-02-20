import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuitiesComponent } from './annuities.component';

describe('AnnuitiesComponent', () => {
  let component: AnnuitiesComponent;
  let fixture: ComponentFixture<AnnuitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnuitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnuitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
