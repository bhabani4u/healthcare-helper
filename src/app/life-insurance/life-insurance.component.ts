import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-life-insurance',
  templateUrl: './life-insurance.component.html',
  styleUrl: './life-insurance.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LifeInsuranceComponent implements OnInit {
  showTermVsWhole = false;
  showRiders = false;
  showFinalExpense = false;
  showHowMuchIsEnough = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const numbers = params['numbers'];
      this.resetSections(); // Reset all sections first
      if (numbers) {
        this.setSectionsByNumber(parseInt(numbers, 10));
      }
    });
  }

  private setSectionsByNumber(numbers: number) {
    if (numbers & 1) {
      this.showTermVsWhole = true;
    }
    if (numbers & 2) {
      this.showRiders = true;
    }
    if (numbers & 4) {
      this.showFinalExpense = true;
    }
    if (numbers & 8) {
      this.showHowMuchIsEnough = true;
    }
  }

  resetAllSections(event: Event): void {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections(): void {
    this.showTermVsWhole = false;
    this.showRiders = false;
    this.showFinalExpense = false;
    this.showHowMuchIsEnough = false;
  }

  ShowOverview(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
  }

  ShowTermVsWhole(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showTermVsWhole = true;
  }

  ShowRiders(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showRiders = true;
  }

  ShowFinalExpense(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showFinalExpense = true;
  }

  ShowHowMuchIsEnough(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showHowMuchIsEnough = true;
  }
}
