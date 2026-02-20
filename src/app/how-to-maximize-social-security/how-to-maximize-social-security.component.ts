import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-how-to-maximize-social-security',
  templateUrl: './how-to-maximize-social-security.component.html',
  styleUrl: './how-to-maximize-social-security.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HowToMaximizeSocialSecurityComponent implements OnInit {
  showOtherHealthcare = false;
  showRetirementAgeMilestones = false;
  showRetirementFactorsToConsider = false;
  showSurvivingSpouseBenefits = false;
  showImportantConsiderations = false;
  currentYear = new Date().getFullYear();
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
      this.showImportantConsiderations = true;
    }
    if (numbers & 2) {
      this.showOtherHealthcare = true;
    }
    if (numbers & 4) {
      this.showRetirementAgeMilestones = true;
    }
    if (numbers & 8) {
      this.showRetirementFactorsToConsider = true;
    }
    if (numbers & 16) {
      this.showSurvivingSpouseBenefits = true;
    }
  }

  resetAllSections(event: Event): void {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections(): void {
    this.showOtherHealthcare = false;
    this.showRetirementAgeMilestones = false;
    this.showRetirementFactorsToConsider = false;
    this.showSurvivingSpouseBenefits = false;
    this.showImportantConsiderations = false;
  }

  showOtherHealthcareSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showOtherHealthcare = true;
  }

  showRetirementAgeMilestonesSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showRetirementAgeMilestones = true;
  }

  showRetirementFactorsToConsiderSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showRetirementFactorsToConsider = true;
  }

  showSurvivingSpouseBenefitsSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showSurvivingSpouseBenefits = true;
  }

  showImportantConsiderationsSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showImportantConsiderations = true;
  }
}
