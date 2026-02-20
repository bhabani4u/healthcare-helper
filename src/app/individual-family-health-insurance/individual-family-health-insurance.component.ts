import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-individual-family-health-insurance',
  templateUrl: './individual-family-health-insurance.component.html',
  styleUrl: './individual-family-health-insurance.component.css',
  encapsulation: ViewEncapsulation.None
})
export class IndividualFamilyHealthInsuranceComponent implements OnInit {
  showIndividualFamilyPlansSection = false;
  showHealthInsuranceMarketsSection = false;
  showPlanCostsSection = false;
  showHMOsPPOsHDHPsSection = false;
  showPremiumsDeductiblesSection = false;
  showDentalInsuranceSection = false;
  showVisionInsuranceSection = false;
  showSupplementalInsuranceSection = false;
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
  resetAllSections(event: Event) {
    event.preventDefault();
    this.resetSections();
  }
  private setSectionsByNumber(numbers: number) {
    if (numbers & 1) {
      this.showIndividualFamilyPlansSection = true;
    }
    if (numbers & 2) {
      this.showHealthInsuranceMarketsSection = true;
    }
    if (numbers & 4) {
      this.showPlanCostsSection = true;
    }
    if (numbers & 8) {
      this.showHMOsPPOsHDHPsSection = true;
    }
    if (numbers & 16) {
      this.showPremiumsDeductiblesSection = true;
    }
    if (numbers & 32) {
      this.showDentalInsuranceSection = true;
    }
    if (numbers & 64) {
      this.showVisionInsuranceSection = true;
    }
    if (numbers & 128) {
      this.showSupplementalInsuranceSection = true;
    }
  }

  private resetSections() {
    this.showIndividualFamilyPlansSection = false;
    this.showHealthInsuranceMarketsSection = false;
    this.showPlanCostsSection = false;
    this.showHMOsPPOsHDHPsSection = false;
    this.showPremiumsDeductiblesSection = false;
    this.showDentalInsuranceSection = false;
    this.showVisionInsuranceSection = false;
    this.showSupplementalInsuranceSection = false;
  }

  showOverview(event: Event) {
    this.resetAllSections(event);
  }

  showIndividualFamilyPlans(event: Event) {
    this.resetAllSections(event);
    this.showIndividualFamilyPlansSection = true;
  }

  showHealthInsuranceMarkets(event: Event) {
    this.resetAllSections(event);
    this.showHealthInsuranceMarketsSection = true;
  }

  showPlanCosts(event: Event) {
    this.resetAllSections(event);
    this.showPlanCostsSection = true;
  }

  showHMOsPPOsHDHPs(event: Event) {
    this.resetAllSections(event);
    this.showHMOsPPOsHDHPsSection = true;
  }

  showPremiumsDeductibles(event: Event) {
    this.resetAllSections(event);
    this.showPremiumsDeductiblesSection = true;
  }

  showDentalInsurance(event: Event) {
    this.resetAllSections(event);
    this.showDentalInsuranceSection = true;
  }

  showVisionInsurance(event: Event) {
    this.resetAllSections(event);
    this.showVisionInsuranceSection = true;
  }

  showSupplementalInsurance(event: Event) {
    this.resetAllSections(event);
    this.showSupplementalInsuranceSection = true;
  }
}
