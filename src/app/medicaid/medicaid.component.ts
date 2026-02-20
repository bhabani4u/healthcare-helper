import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicaid',
  templateUrl: './medicaid.component.html',
  styleUrl: './medicaid.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MedicaidComponent {
  showEligibilityEnrollment = false;
  showBaseBenefits = false;
  showExpandedBenefits = false;
  showCombinedBenefits = false;
  showMedicareAdvantage = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const numbers = params['numbers'];
      this.resetSections();
      if (numbers) {
        this.setSectionsByNumber(parseInt(numbers, 10));
      }
    });
  }

  private setSectionsByNumber(numbers: number): void {
    if (numbers & 1) {
      this.showEligibilityEnrollment = true;
    }
    if (numbers & 2) {
      this.showBaseBenefits = true;
    }
    if (numbers & 4) {
      this.showExpandedBenefits = true;
    }
    if (numbers & 8) {
      this.showCombinedBenefits = true;
    }
    if (numbers & 16) {
      this.showMedicareAdvantage = true;
    }
  }

  resetAllSections(event: Event): void {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections(): void {
    this.showEligibilityEnrollment = false;
    this.showBaseBenefits = false;
    this.showExpandedBenefits = false;
    this.showCombinedBenefits = false;
    this.showMedicareAdvantage = false;
  }

  showEligibilityEnrollmentSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showEligibilityEnrollment = true;
  }

  showBaseBenefitsSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showBaseBenefits = true;
  }

  showExpandedBenefitsSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showExpandedBenefits = true;
  }

  showCombinedBenefitsSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showCombinedBenefits = true;
  }

  showMedicareAdvantageSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showMedicareAdvantage = true;
  }
}
