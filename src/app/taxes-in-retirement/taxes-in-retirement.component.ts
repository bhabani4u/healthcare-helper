import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taxes-in-retirement',
  templateUrl: './taxes-in-retirement.component.html',
  styleUrl: './taxes-in-retirement.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TaxesInRetirement implements OnInit {
  showSocialSecurityTaxesSection = false;
  showAnnuityTaxesSection = false;
  showLifeInsuranceTaxesSection = false;
  show401ksAndIRATaxesSection = false;
  showLongTermCareAndTaxesSection = false;
  showRequiredMinimumDistributionsSection = false;
  showPlansSubjectToRMDsSection = false;

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
      this.showSocialSecurityTaxesSection = true;
    }
    if (numbers & 2) {
      this.showAnnuityTaxesSection = true;
    }
    if (numbers & 4) {
      this.showLifeInsuranceTaxesSection = true;
    }
    if (numbers & 8) {
      this.show401ksAndIRATaxesSection = true;
    }
    if (numbers & 16) {
      this.showLongTermCareAndTaxesSection = true;
    }
    if (numbers & 32) {
      this.showRequiredMinimumDistributionsSection = true;
    }
    if (numbers & 64) {
      this.showPlansSubjectToRMDsSection = true;
    }
  }

  resetAllSections(event: Event): void {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections(): void {
    this.showSocialSecurityTaxesSection = false;
    this.showAnnuityTaxesSection = false;
    this.showLifeInsuranceTaxesSection = false;
    this.show401ksAndIRATaxesSection = false;
    this.showLongTermCareAndTaxesSection = false;
    this.showRequiredMinimumDistributionsSection = false;
    this.showPlansSubjectToRMDsSection = false;
  }

  showSocialSecurityTaxes(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showSocialSecurityTaxesSection = true;
  }

  showAnnuityTaxes(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showAnnuityTaxesSection = true;
  }

  showLifeInsuranceTaxes(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showLifeInsuranceTaxesSection = true;
  }

  show401ksAndIRATaxes(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.show401ksAndIRATaxesSection = true;
  }

  showLongTermCareAndTaxes(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showLongTermCareAndTaxesSection = true;
  }

  showRequiredMinimumDistributions(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showRequiredMinimumDistributionsSection = true;
  }

  showPlansSubjectToRMDs(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showPlansSubjectToRMDsSection = true;
  }
}
