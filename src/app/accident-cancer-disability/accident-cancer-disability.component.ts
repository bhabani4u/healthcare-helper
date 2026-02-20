import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accident-cancer-disability',
  templateUrl: './accident-cancer-disability.component.html',
  styleUrl: './accident-cancer-disability.component.css'
})
export class AccidentCancerDisabilityComponent {
  showIncomeProtectionInsuranceSection = false;
  showDentalAndVisionCoverageSection = false;
  showDifferFromMedicalInsuranceSection = false;
  showAccidentPoliciesSection = false;
  showCancerPoliciesSection = false;
  showDisabilityPoliciesSection = false;

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
      this.showDentalAndVisionCoverageSection = true;
    }
    if (numbers & 2) {
      this.showIncomeProtectionInsuranceSection = true;
    }
    if (numbers & 4) {
      this.showDifferFromMedicalInsuranceSection = true;
    }
    if (numbers & 8) {
      this.showAccidentPoliciesSection = true;
    }
    if (numbers & 16) {
      this.showCancerPoliciesSection = true;
    }
    if (numbers & 32) {
      this.showDisabilityPoliciesSection = true;
    }
  }

  resetAllSections(event: Event) {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections() {
    this.showIncomeProtectionInsuranceSection = false;
    this.showDentalAndVisionCoverageSection = false;
    this.showDifferFromMedicalInsuranceSection = false;
    this.showAccidentPoliciesSection = false;
    this.showCancerPoliciesSection = false;
    this.showDisabilityPoliciesSection = false;
  }

  showOverview(event: Event) {
    this.resetAllSections(event);
  }

  showDentalAndVisionCoverage(event: Event) {
    this.resetAllSections(event);
    this.showDentalAndVisionCoverageSection = true;
  }

  showIncomeProtectionInsurance(event: Event) {
    this.resetAllSections(event);
    this.showIncomeProtectionInsuranceSection = true;
  }

  showDifferFromMedicalInsurance(event: Event) {
    this.resetAllSections(event);
    this.showDifferFromMedicalInsuranceSection = true;
  }

  showAccidentPolicies(event: Event) {
    this.resetAllSections(event);
    this.showAccidentPoliciesSection = true;
  }

  showCancerPolicie(event: Event) {
    this.resetAllSections(event);
    this.showCancerPoliciesSection = true;
  }

  showDisabilityPolicies(event: Event) {
    this.resetAllSections(event);
    this.showDisabilityPoliciesSection = true;
  }
}
