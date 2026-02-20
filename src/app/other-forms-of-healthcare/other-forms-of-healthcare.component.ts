import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-other-forms-of-healthcare',
  templateUrl: './other-forms-of-healthcare.component.html',
  styleUrl: './other-forms-of-healthcare.component.css',
  encapsulation: ViewEncapsulation.None
})
export class OtherFormsOfHealthcareComponent implements OnInit {
  showMedicareAndSS = false;
  showOtherHealthcare = false;
  showSSMaximization = false;
  showCOBRA = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    debugger;
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
    if (numbers & 2) {
      this.showOtherHealthcare = true;
    }
    if (numbers & 4) {
      this.showSSMaximization = true;
    }
    if(numbers & 8){
      this.showCOBRA = true;
    }
  }

  resetAllSections(event: Event): void {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections(): void {
    debugger;
    this.showMedicareAndSS = false;
    this.showOtherHealthcare = false;
    this.showSSMaximization = false;
    this.showCOBRA = false;
  }

  showMedicareAndSSSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showMedicareAndSS = true;
  }

  showOtherHealthcareSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showOtherHealthcare = true;
  }

  showSSMaximizationSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showSSMaximization = true;
  }
  showCOBRASection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showCOBRA = true;
  }
}
