import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resource-library',
  templateUrl: './resource-library.component.html',
  styleUrl: './resource-library.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ResourceLibraryComponent {
  showPowerOfAttorneyFormsSection = false;
  showSocialSecurityFormsSection = false;
  showMedicareFormsSection = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const section = params['section'];
      this.resetSections(); // Reset all sections first
      if (section) {
        this.setSectionsByNumber(section);
      }
    });
  }

  private setSectionsByNumber(sectionData: any) {
    if (sectionData == 'power-of-attorney-forms') {
      this.showPowerOfAttorneyFormsSection = true;
    }
    if (sectionData == 'social-security-forms') {
      this.showSocialSecurityFormsSection = true;
    }
    if (sectionData == 'medicare-forms') {
      this.showMedicareFormsSection = true;
    }
  }

  resetAllSections(event: Event): void {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections(): void {
    this.showPowerOfAttorneyFormsSection = false;
    this.showSocialSecurityFormsSection = false;
    this.showMedicareFormsSection = false;
  }

  showPowerOfAttorneyForms(event: Event): void {
    event.preventDefault();
    debugger;
    this.resetAllSections(event);
    this.showPowerOfAttorneyFormsSection = true;
  }

  showSocialSecurityForms(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showSocialSecurityFormsSection = true;
  }

  showMedicareForms(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showMedicareFormsSection = true;
  }
}
