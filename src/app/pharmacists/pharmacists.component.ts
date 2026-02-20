import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pharmacists',
  templateUrl: './pharmacists.component.html',
  styleUrl: './pharmacists.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PharmacistsComponent implements OnInit {
  showOverviewSection = false;
  showRoleOfAgentsSection = false;
  showImprovingEfficiencySection = false;
  showCommunicationProvidersSection = false;
  showInsuranceChallengesSection = false;

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
    if (numbers & 0) {
      this.showOverviewSection = true;
    }
    if (numbers & 1) {
      this.showRoleOfAgentsSection = true;
    }
    if (numbers & 2) {
      this.showImprovingEfficiencySection = true;
    }
    if (numbers & 4) {
      this.showCommunicationProvidersSection = true;
    }
    if (numbers & 8) {
      this.showInsuranceChallengesSection = true;
    }
  }

  resetAllSections(event: Event) {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections() {
    this.showOverviewSection = false;
    this.showRoleOfAgentsSection = false;
    this.showImprovingEfficiencySection = false;
    this.showCommunicationProvidersSection = false;
    this.showInsuranceChallengesSection = false;
  }

  showOverview(event: Event) {
    this.resetAllSections(event);
  }

  showRoleOfAgents(event: Event) {
    this.resetAllSections(event);
    this.showRoleOfAgentsSection = true;
  }

  showImprovingEfficiency(event: Event) {
    this.resetAllSections(event);
    this.showImprovingEfficiencySection = true;
  }

  showCommunicationProviders(event: Event) {
    this.resetAllSections(event);
    this.showCommunicationProvidersSection = true;
  }

  showInsuranceChallenges(event: Event) {
    this.resetAllSections(event);
    this.showInsuranceChallengesSection = true;
  }
}
