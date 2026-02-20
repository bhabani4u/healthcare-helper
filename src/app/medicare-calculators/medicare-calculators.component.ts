import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicare-calculators',
  templateUrl: './medicare-calculators.component.html',
  styleUrls: ['./medicare-calculators.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MedicareCalculatorsComponent {
  currentYear = new Date().getFullYear();
  premiumForm!: FormGroup;
  partBPremium: number = 202.90;
  irmaaB: number = 0.00;
  irmaaD: number = 0.00;
  partDPremium: number = 0.00; // Set default to 0.00
  totalPartBPremium: number = 0.00;
  totalPartDPremium: number = 0.00;

  showMedicareCostCalculator = false;
  showPartB = false;
  showPartD = false;
  costCalculatorForm: FormGroup;
  partBCalculatorForm: FormGroup;
  partDCalculatorForm: FormGroup;
  irmaaCalculatorForm: FormGroup;

  costResult: any;
  partBResult: any;
  partDResult: any;
  irmaaResult: any;

  // Define income brackets for both Individual and Joint filing statuses
  individualBrackets = [
    { value: '0', label: '$109,000 or less' },
    { value: '1', label: '$109,001 to $137,000' },
    { value: '2', label: '$137,001 to $171,000' },
    { value: '3', label: '$171,001 to $205,000' },
    { value: '4', label: '$205,001 to $499,999' },
    { value: '5', label: '$500,000 +' }
  ];


  jointBrackets = [
    { value: '0', label: '$218,000 or less' },
    { value: '1', label: '$218,001 to $274,000' },
    { value: '2', label: '$274,001 to $342,000' },
    { value: '3', label: '$342,001 to $410,000' },
    { value: '4', label: '$410,001 to $749,999' },
    { value: '5', label: '$750,000 +' }
  ];


  incomeBrackets = this.individualBrackets;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.costCalculatorForm = this.fb.group({
      annualIncome: ['', Validators.required],
      filingStatus: ['', Validators.required],
    });

    this.partBCalculatorForm = this.fb.group({
      monthsWithoutPartB: ['', Validators.required],
    });

    this.partDCalculatorForm = this.fb.group({
      monthsWithoutPartD: [null, [Validators.required, Validators.min(0)]],
      partDPremium: [0, [Validators.required, Validators.min(0)]]
    });

    this.irmaaCalculatorForm = this.fb.group({
      annualIncomeIrmaa: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const numbers = params['numbers'];
      this.resetSections(); // Reset all sections first
      if (numbers) {
        this.setSectionsByNumber(parseInt(numbers, 10));
      }
    });

    this.premiumForm = this.fb.group({
      filingStatus: ['Individual'],  // Default to Individual
      incomeBracket: [''],           // Default to blank
      partDKnown: ['No']             // Default to No
    });

    this.premiumForm.valueChanges.subscribe(values => this.calculatePremiums(values));
  }
  onFilingStatusChange(): void {
    // Reset the income bracket and update the options based on filing status
    const filingStatus = this.premiumForm.get('filingStatus')?.value;
    if (filingStatus === 'Individual') {
      this.incomeBrackets = this.individualBrackets;
    } else {
      this.incomeBrackets = this.jointBrackets;
    }

    // Reset the selected income bracket to blank
    this.resetIncomeBracket();
  }

  resetIncomeBracket(): void {
    this.premiumForm.patchValue({
      incomeBracket: ''  // Reset income bracket to blank when filing status changes
    });
  }

  calculatePremiums(values: any) {
    this.irmaaB = 0;
    this.irmaaD = 0;
    this.totalPartBPremium = 0;
    this.totalPartDPremium = 0;

    switch (values.incomeBracket) {
      case '0':
        this.totalPartBPremium = this.partBPremium;
        break;

      case '1':
        this.irmaaB = 81.20;
        this.irmaaD = 14.50;
        this.totalPartBPremium = this.partBPremium + this.irmaaB;
        break;

      case '2':
        this.irmaaB = 202.90;
        this.irmaaD = 37.50;
        this.totalPartBPremium = this.partBPremium + this.irmaaB;
        break;

      case '3':
        this.irmaaB = 324.60;
        this.irmaaD = 60.40;
        this.totalPartBPremium = this.partBPremium + this.irmaaB;
        break;

      case '4':
        this.irmaaB = 446.30;
        this.irmaaD = 83.30;
        this.totalPartBPremium = this.partBPremium + this.irmaaB;
        break;

      case '5':
        this.irmaaB = 487.00;
        this.irmaaD = 91.00;
        this.totalPartBPremium = this.partBPremium + this.irmaaB;
        break;
    }

    if (values.partDKnown === 'No') {
      this.partDPremium = 31.50;  // Show default Part D premium
      this.totalPartDPremium = this.partDPremium + this.irmaaD;
    } else {
      this.partDPremium = 0;  // Empty the Part D premium
      this.totalPartDPremium = 0;
    }
  }

  private setSectionsByNumber(numbers: number) {
    if (numbers & 1) {
      this.showMedicareCostCalculator = true;
    }
    if (numbers & 2) {
      this.showPartB = true;
    }
    if (numbers & 4) {
      this.showPartD = true;
    }
  }

  showMedicareCostCalculatorSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showMedicareCostCalculator = true;
  }

  showPartBSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showPartB = true;
  }

  showPartDSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showPartD = true;
  }

  resetAllSections(event: Event): void {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections(): void {
    this.showMedicareCostCalculator = false;
    this.showPartB = false;
    this.showPartD = false;
  }

  onSubmitCostCalculator() {
    const { annualIncome, filingStatus } = this.costCalculatorForm.value;
    this.costResult = this.calculateMedicareCosts(annualIncome, filingStatus);
  }

  onSubmitPartBCalculator() {
    debugger;
    const { monthsWithoutPartB } = this.partBCalculatorForm.value;
    this.partBResult = this.calculatePartBPenalty(monthsWithoutPartB);
    console.log("partBResult", this.partBResult);
  }

  onSubmitPartDCalculator() {
    if (this.partDCalculatorForm.valid) {
      const { monthsWithoutPartD, partDPremium } = this.partDCalculatorForm.value;
      this.partDResult = this.calculatePartDPenalty(monthsWithoutPartD, partDPremium || 0);
      console.log("partDResult", this.partDResult);
    }
  }

  onSubmitIrmaaCalculator() {
    const { annualIncomeIrmaa } = this.irmaaCalculatorForm.value;
    this.irmaaResult = this.calculateIrmaa(annualIncomeIrmaa);
  }

  calculateMedicareCosts(annualIncome: number, filingStatus: string) {
    let partBPremium = 202.90; // Base premium for Part B
    let partDPremium = 0; // Base premium for Part D

    if (filingStatus === 'individual') {
      if (annualIncome <= 109000) {
        // no IRMAA
      } else if (annualIncome <= 137000) {
        partBPremium += 81.20;
        partDPremium += 14.50;
      } else if (annualIncome <= 171000) {
        partBPremium += 202.90;
        partDPremium += 37.50;
      } else if (annualIncome <= 205000) {
        partBPremium += 324.60;
        partDPremium += 60.40;
      } else if (annualIncome < 500000) {
        partBPremium += 446.30;
        partDPremium += 83.30;
      } else {
        partBPremium += 487.00;
        partDPremium += 91.00;
      }
    } else if (filingStatus === 'joint') {
      // Joint filers based on income brackets
      if (annualIncome <= 218000) {
        // no IRMAA
      } else if (annualIncome <= 274000) {
        partBPremium += 81.20;
        partDPremium += 14.50;
      } else if (annualIncome <= 342000) {
        partBPremium += 202.90;
        partDPremium += 37.50;
      } else if (annualIncome <= 410000) {
        partBPremium += 324.60;
        partDPremium += 60.40;
      } else if (annualIncome < 750000) {
        partBPremium += 446.30;
        partDPremium += 83.30;
      } else {
        partBPremium += 487.00;
        partDPremium += 91.00;
      }
    }

    return { partBPremium, partDPremium };
  }

  // calculateMedicareCosts(annualIncome: number, filingStatus: string) {
  //     let partBPremium = 202.90; // Base Part B premium for current year
  //     let partDPremium = 0; // Assume plan's base premium is calculated elsewhere

  //     // IRMAA for single filers
  //     if (filingStatus === 'individual') {
  //         if (annualIncome > 103000 && annualIncome <= 129000) {
  //             partBPremium += 69.90;
  //             partDPremium += 12.90;
  //         } else if (annualIncome > 129000 && annualIncome <= 161000) {
  //             partBPremium += 202.90;
  //             partDPremium += 33.30;
  //         } else if (annualIncome > 161000 && annualIncome <= 193000) {
  //             partBPremium += 279.50;
  //             partDPremium += 53.80;
  //         } else if (annualIncome > 193000 && annualIncome < 500000) {
  //             partBPremium += 384.30;
  //             partDPremium += 74.20;
  //         } else if (annualIncome >= 500000) {
  //             partBPremium += 419.30;
  //             partDPremium += 81.00;
  //         }
  //     }
  //     // IRMAA for joint filers
  //     else if (filingStatus === 'joint') {
  //         if (annualIncome > 206000 && annualIncome <= 258000) {
  //             partBPremium += 69.90;
  //             partDPremium += 12.90;
  //         } else if (annualIncome > 258000 && annualIncome <= 322000) {
  //             partBPremium += 202.90;
  //             partDPremium += 33.30;
  //         } else if (annualIncome > 322000 && annualIncome <= 386000) {
  //             partBPremium += 279.50;
  //             partDPremium += 53.80;
  //         } else if (annualIncome > 386000 && annualIncome < 750000) {
  //             partBPremium += 384.30;
  //             partDPremium += 74.20;
  //         } else if (annualIncome >= 750000) {
  //             partBPremium += 419.30;
  //             partDPremium += 81.00;
  //         }
  //     }

  //     return { partBPremium, partDPremium };
  // }


  calculatePartBPenalty(yearsWithoutPartB: number) {
    const penaltyPercentage = Math.min(yearsWithoutPartB * 10, 100);  // Ensure percentage does not exceed 100%
    const penaltyCost = (penaltyPercentage / 100) * 202.90; // Using the current year Part B premium from the table
    const totalPartBPremium = 202.90 + penaltyCost;

    return {
      penaltyPercentage,
      penaltyCost,
      totalPartBPremium
    };
  }

  calculatePartDPenalty(monthsWithoutPartD: number, partDPremium: number) {
    const baseBeneficiaryPremium = 38.99; // current year National base beneficiary premium
    const penaltyPercentage = monthsWithoutPartD * 1; // 1% for each uncovered month
    const penaltyCost = (penaltyPercentage / 100) * baseBeneficiaryPremium;
    const totalPartDPremium = partDPremium + penaltyCost; // Sum of user-provided premium and the penalty

    return {
      penaltyPercentage,
      penaltyCost,
      totalPartDPremium
    };
  }

  calculateIrmaa(annualIncome: number) {
    let irmaa = 0;
    if (annualIncome > 103000) {
      irmaa = (annualIncome - 103000) * 0.1;
    }
    return { irmaa };
  }
}
