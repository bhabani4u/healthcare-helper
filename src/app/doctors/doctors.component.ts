import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css',
  encapsulation: ViewEncapsulation.None
})
export class DoctorsComponent implements OnInit {
  showAgentKnowledgeSection = false;
  showAgentPracticeSection = false;
  showRetentionDevelopmentSection = false;
  showFFSManagedCareSection = false;
  showIPADoctorsSection = false;
  showStaffDoctorsSection = false;
  showPharmacySection = false;
  showBehavioralHealthSection = false;

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
      this.showAgentKnowledgeSection = true;
    }
    if (numbers & 2) {
      this.showAgentPracticeSection = true;
    }
    if (numbers & 4) {
      this.showRetentionDevelopmentSection = true;
    }
    if (numbers & 8) {
      this.showFFSManagedCareSection = true;
    }
    if (numbers & 16) {
      this.showIPADoctorsSection = true;
    }
    if (numbers & 32) {
      this.showStaffDoctorsSection = true;
    }
    if (numbers & 64) {
      this.showPharmacySection = true;
    }
    if (numbers & 128) {
      this.showBehavioralHealthSection = true;
    }
  }

  resetAllSections(event: Event) {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections() {
    this.showAgentKnowledgeSection = false;
    this.showAgentPracticeSection = false;
    this.showRetentionDevelopmentSection = false;
    this.showFFSManagedCareSection = false;
    this.showIPADoctorsSection = false;
    this.showStaffDoctorsSection = false;
    this.showPharmacySection = false;
    this.showBehavioralHealthSection = false;
  }

  showOverview(event: Event) {
    this.resetAllSections(event);
  }

  showAgentKnowledge(event: Event) {
    this.resetAllSections(event);
    this.showAgentKnowledgeSection = true;
  }

  showAgentPractice(event: Event) {
    this.resetAllSections(event);
    this.showAgentPracticeSection = true;
  }

  showRetentionDevelopment(event: Event) {
    this.resetAllSections(event);
    this.showRetentionDevelopmentSection = true;
  }

  showFFSManagedCare(event: Event) {
    this.resetAllSections(event);
    this.showFFSManagedCareSection = true;
  }

  showIPADoctors(event: Event) {
    this.resetAllSections(event);
    this.showIPADoctorsSection = true;
  }

  showStaffDoctors(event: Event) {
    this.resetAllSections(event);
    this.showStaffDoctorsSection = true;
  }

  showPharmacy(event: Event) {
    this.resetAllSections(event);
    this.showPharmacySection = true;
  }

  showBehavioralHealth(event: Event) {
    this.resetAllSections(event);
    this.showBehavioralHealthSection = true;
  }
}
