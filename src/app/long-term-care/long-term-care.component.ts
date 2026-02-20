import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-long-term-care',
  templateUrl: './long-term-care.component.html',
  styleUrl: './long-term-care.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LongTermCareComponent implements OnInit {
  showHowPoliciesWork = false;
  showWhyBuyLTC = false;
  showQuestions = false;
  showHybridAnnuity = false;
  showHybridLifeInsurance = false;

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
      this.showHowPoliciesWork = true;
    }
    if (numbers & 2) {
      this.showWhyBuyLTC = true;
    }
    if (numbers & 4) {
      this.showQuestions = true;
    }
    if(numbers & 8) {
      this.showHybridAnnuity = true;
    }
    if(numbers & 16){
      this.showHybridLifeInsurance = true;
    }
  }

  resetAllSections(event: Event) {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections() {
    this.showHowPoliciesWork = false;
    this.showWhyBuyLTC = false;
    this.showQuestions = false;
    this.showHybridAnnuity = false;
    this.showHybridLifeInsurance = false;
  }

  ShowHowPoliciesWork(event: Event) {
    event.preventDefault();
    this.resetAllSections(event);
    this.showHowPoliciesWork = true;
  }

  ShowWhyBuyLTC(event: Event) {
    event.preventDefault();
    this.resetAllSections(event);
    this.showWhyBuyLTC = true;
  }

  ShowQuestions(event: Event) {
    event.preventDefault();
    this.resetAllSections(event);
    this.showQuestions = true;
  }

  ShowHybridAnnuity(event: Event){
    event.preventDefault();
    this.resetAllSections(event);
    this.showHybridAnnuity = true;
  }

  ShowHybridLifeInsurance(event: Event){
    event.preventDefault();
    this.resetAllSections(event);
    this.showHybridLifeInsurance = true;
  }
}
