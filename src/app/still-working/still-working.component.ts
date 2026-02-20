import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-still-working',
  templateUrl: './still-working.component.html',
  styleUrl: './still-working.component.css',
  encapsulation: ViewEncapsulation.None
})
export class StillWorkingComponent implements OnInit {
  showMedicareAndSS = false;

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
      this.showMedicareAndSS = true;
    }
  }

  resetAllSections(event: Event): void {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections(): void {
    this.showMedicareAndSS = false;
  }

  showMedicareAndSSSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showMedicareAndSS = true;
  }
}
