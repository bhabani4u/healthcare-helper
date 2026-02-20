import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-individual-and-family-plans',
  templateUrl: './individual-and-family-plans.component.html',
  styleUrl: './individual-and-family-plans.component.css',
  encapsulation: ViewEncapsulation.None
})
export class IndividualAndFamilyPlansComponent {
  showComparePlans = false;
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
      this.showComparePlans = true;
    }
  }

  resetAllSections(event: Event): void {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections(): void {
    this.showComparePlans = false;
  }

  showComparePlansSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showComparePlans = true;
  }
}
