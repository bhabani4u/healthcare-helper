import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicare-insurance',
  templateUrl: './medicare-insurance.component.html',
  styleUrl: './medicare-insurance.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MedicareInsuranceComponent {
  showMedicare101Trainings = false;
  showPlanComparison = false;
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
      this.showMedicare101Trainings = true;
    }
    if (numbers & 2) {
      this.showPlanComparison = true;
    }
  }

  resetAllSections(event: Event): void {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections(): void {
    this.showMedicare101Trainings = false;
    this.showPlanComparison = false;
  }

  showMedicare101TrainingsSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showMedicare101Trainings = true;
  }

  showPlanComparisonSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showPlanComparison = true;
  }
}
