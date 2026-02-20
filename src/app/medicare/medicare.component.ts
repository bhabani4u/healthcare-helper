import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicare',
  templateUrl: './medicare.component.html',
  styleUrl: './medicare.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MedicareComponent implements OnInit {
  currentYear = new Date().getFullYear();
  showMedicarePartsSection = false;
  showMedicareAdvantageSection = false;
  showBaseCostsSection = false;
  showIRMAASection = false;
  showExpansionCoverageSection = false;
  showMedicareAdvantagePlansSection = false;
  showMedicareSupplementPlansSection = false;
  showMedicarePartDSection = false;
  showComparePlansSection = false;
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
      this.showMedicarePartsSection = true;
    }
    if (numbers & 2) {
      this.showMedicareAdvantageSection = true;
    }
    if (numbers & 4) {
      this.showBaseCostsSection = true;
    }
    if (numbers & 8) {
      this.showIRMAASection = true;
    }
    if (numbers & 16) {
      this.showExpansionCoverageSection = true;
    }
    if (numbers & 32) {
      this.showMedicareAdvantagePlansSection = true;
    }
    if (numbers & 64) {
      this.showMedicareSupplementPlansSection = true;
    }
    if (numbers & 128) {
      this.showMedicarePartDSection = true;
    }
    if (numbers & 256) {
      this.showComparePlansSection = true;
    }
  }
resetAllSections(event: Event) {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections() {
    this.showMedicarePartsSection = false;
    this.showMedicareAdvantageSection = false;
    this.showBaseCostsSection = false;
    this.showIRMAASection = false;
    this.showExpansionCoverageSection = false;
    this.showMedicareAdvantagePlansSection = false;
    this.showMedicareSupplementPlansSection = false;
    this.showMedicarePartDSection = false;
    this.showComparePlansSection = false;
  }

  showOverview(event: Event) {
    this.resetAllSections(event);
  }

  showMedicareParts(event: Event) {
    this.resetAllSections(event);
    this.showMedicarePartsSection = true;
  }

  showMedicareAdvantage(event: Event) {
    this.resetAllSections(event);
    this.showMedicareAdvantageSection = true;
  }

  showBaseCosts(event: Event) {
    this.resetAllSections(event);
    this.showBaseCostsSection = true;
  }

  showIRMAA(event: Event) {
    this.resetAllSections(event);
    this.showIRMAASection = true;
  }

  showExpansionCoverage(event: Event) {
    this.resetAllSections(event);
    this.showExpansionCoverageSection = true;
  }

  showMedicareAdvantagePlans(event: Event) {
    this.resetAllSections(event);
    this.showMedicareAdvantagePlansSection = true;
  }

  showMedicareSupplementPlans(event: Event) {
    this.resetAllSections(event);
    this.showMedicareSupplementPlansSection = true;
  }

  showMedicarePartD(event: Event) {
    this.resetAllSections(event);
    this.showMedicarePartDSection = true;
  }

  showComparePlans(event: Event) {
    this.resetAllSections(event);
    this.showComparePlansSection = true;
  }
}
