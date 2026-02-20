import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-turning-65',
  templateUrl: './turning-65.component.html',
  styleUrl: './turning-65.component.css',
  encapsulation: ViewEncapsulation.None
})
export class Turning65Component implements OnInit {
  showMedicareAndSocialSecurity = false;
  showMedicareEnrollment = false;

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
      this.showMedicareAndSocialSecurity = true;
    }
    if (numbers & 2) {
      this.showMedicareEnrollment = true;
    }
  }

  resetAllSections(event: Event): void {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections(): void {
    this.showMedicareEnrollment = false;
    this.showMedicareAndSocialSecurity = false;
  }

  ShowMedicareEnrollment(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showMedicareEnrollment = true;
  }

  ShowMedicareAndSocialSecurity(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showMedicareAndSocialSecurity = true;
  }
}
