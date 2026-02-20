import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preparing-your-estate',
  templateUrl: './preparing-your-estate.component.html',
  styleUrl: './preparing-your-estate.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PreparingYourEstateComponent implements OnInit {
  showLivingTrustSection = false;
  showCreateWillSection = false;
  showDifferenceWillTrustSection = false;
  showPowerOfAttorneySection = false;
  showEndOfLifeExpensesSection = false;

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
      this.showLivingTrustSection = true;
    }
    if (numbers & 2) {
      this.showCreateWillSection = true;
    }
    if (numbers & 4) {
      this.showDifferenceWillTrustSection = true;
    }
    if (numbers & 8) {
      this.showPowerOfAttorneySection = true;
    }
    if (numbers & 16) {
      this.showEndOfLifeExpensesSection = true;
    }
  }

  resetAllSections(event: Event): void {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections(): void {
    this.showLivingTrustSection = false;
    this.showCreateWillSection = false;
    this.showDifferenceWillTrustSection = false;
    this.showPowerOfAttorneySection = false;
    this.showEndOfLifeExpensesSection = false;
  }

  showLivingTrust(event: Event): void {
    event.preventDefault();
    debugger;
    this.resetAllSections(event);
    this.showLivingTrustSection = true;
  }

  showCreateWill(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showCreateWillSection = true;
  }

  showDifferenceWillTrust(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showDifferenceWillTrustSection = true;
  }

  showPowerOfAttorney(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showPowerOfAttorneySection = true;
  }

  showEndOfLifeExpenses(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showEndOfLifeExpensesSection = true;
  }
}
