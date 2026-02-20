import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medical-glossary',
  templateUrl: './medical-glossary.component.html',
  styleUrl: './medical-glossary.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MedicalGlossaryComponent implements OnInit {
  showPrefixes = true;
  showRootWords = false;
  showSuffixes = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
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
      this.showPrefixes = true;
    }
    if (numbers & 2) {
      this.showRootWords = true;
    }
    if (numbers & 4) {
      this.showSuffixes = true;
    }
  }

  resetAllSections(event: Event) {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections() {
    this.showPrefixes = false;
    this.showRootWords = false;
    this.showSuffixes = false;
  }

  ShowPrefixes(event: Event) {
    this.resetAllSections(event);
    this.showPrefixes = true;
  }

  ShowRootWords(event: Event) {
    this.resetAllSections(event);
    this.showRootWords = true;
  }

  ShowSuffixes(event: Event) {
    this.resetAllSections(event);
    this.showSuffixes = true;
  }
}
