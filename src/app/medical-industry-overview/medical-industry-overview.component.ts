import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medical-industry-overview',
  templateUrl: './medical-industry-overview.component.html',
  styleUrl: './medical-industry-overview.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MedicalIndustryOverviewComponent implements OnInit {
  showPrioritizeHealthcareSection = false;
  showSelectDoctorSection = false;
  showSelectMedicalGroupSection = false;
  showSelectInsurancePlanSection = false;
  showPharmacistMattersSection = false;
  showRoleOfAgentSection = false;
  showHealthcareTechnologySection = false;
  showFutureOfHealthcareSection = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    debugger;
    this.route.queryParams.subscribe(params => {
      debugger;
      const numbers = params['numbers'];
      this.resetSections(); // Reset all sections first
      if (numbers) {
        this.setSectionsByNumber(parseInt(numbers, 10));
      }
    });
  }

  private setSectionsByNumber(numbers: number) {
    if (numbers & 1) {
      this.showPrioritizeHealthcareSection = true;
    }
    if (numbers & 2) {
      this.showSelectDoctorSection = true;
    }
    if (numbers & 4) {
      this.showSelectMedicalGroupSection = true;
    }
    if (numbers & 8) {
      this.showSelectInsurancePlanSection = true;
    }
    if (numbers & 16) {
      this.showPharmacistMattersSection = true;
    }
    if (numbers & 32) {
      this.showRoleOfAgentSection = true;
    }
    if (numbers & 64) {
      this.showHealthcareTechnologySection = true;
    }
    if (numbers & 128) {
      this.showFutureOfHealthcareSection = true;
    }
  }

  resetAllSections(event: Event) {
    event.preventDefault();
    this.showPrioritizeHealthcareSection = false;
    this.showSelectDoctorSection = false;
    this.showSelectMedicalGroupSection = false;
    this.showSelectInsurancePlanSection = false;
    this.showPharmacistMattersSection = false;
    this.showRoleOfAgentSection = false;
    this.showHealthcareTechnologySection = false;
    this.showFutureOfHealthcareSection = false;
  }

  showPrioritizeHealthcare(event: Event) {
    event.preventDefault();
    this.resetSections();
    this.showPrioritizeHealthcareSection = true;
  }

  showSelectDoctor(event: Event) {
    event.preventDefault();
    this.resetSections();
    this.showSelectDoctorSection = true;
  }

  showSelectMedicalGroup(event: Event) {
    event.preventDefault();
    this.resetSections();
    this.showSelectMedicalGroupSection = true;
  }

  showSelectInsurancePlan(event: Event) {
    event.preventDefault();
    this.resetSections();
    this.showSelectInsurancePlanSection = true;
  }

  showPharmacistMatters(event: Event) {
    event.preventDefault();
    this.resetSections();
    this.showPharmacistMattersSection = true;
  }

  showRoleOfAgent(event: Event) {
    event.preventDefault();
    this.resetSections();
    this.showRoleOfAgentSection = true;
  }

  showHealthcareTechnology(event: Event) {
    event.preventDefault();
    this.resetSections();
    this.showHealthcareTechnologySection = true;
  }

  showFutureOfHealthcare(event: Event) {
    event.preventDefault();
    this.resetSections();
    this.showFutureOfHealthcareSection = true;
  }

  private resetSections() {
    this.showPrioritizeHealthcareSection = false;
    this.showSelectDoctorSection = false;
    this.showSelectMedicalGroupSection = false;
    this.showSelectInsurancePlanSection = false;
    this.showPharmacistMattersSection = false;
    this.showRoleOfAgentSection = false;
    this.showHealthcareTechnologySection = false;
    this.showFutureOfHealthcareSection = false;
  }
}
