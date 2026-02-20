import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-annuities',
  templateUrl: './annuities.component.html',
  styleUrl: './annuities.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AnnuitiesComponent implements OnInit {
  showTypes = false;
  showBenefits = false;

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
      this.showTypes = true;
    }
    if (numbers & 2) {
      this.showBenefits = true;
    }
  }

  resetAllSections(event: Event): void {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections(): void {
    this.showTypes = false;
    this.showBenefits = false;
  }

  ShowTypes(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showTypes = true;
  }

  ShowBenefits(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showBenefits = true;
  }
}
