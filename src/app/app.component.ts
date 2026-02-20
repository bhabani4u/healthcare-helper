import { Component, Renderer2, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'healthcare-helper';
  visibleDiv: string = '';
  visibleDiv2: string = '';
  currentYear: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.currentYear = new Date().getFullYear();
    const forPatientsMenu = this.el.nativeElement.querySelector('#forPatientsMenu');
    const forProvidersMenu = this.el.nativeElement.querySelector('#forProvidersMenu');
    const aboutMeMenu = this.el.nativeElement.querySelector('#aboutMeMenu');

    this.renderer.listen(forPatientsMenu, 'shown.bs.dropdown', () => {
      this.visibleDiv = 'forPatients';
    });

    this.renderer.listen(forProvidersMenu, 'shown.bs.dropdown', () => {
      this.visibleDiv = 'forProviders';
    });

    this.renderer.listen(aboutMeMenu, 'shown.bs.dropdown', () => {
      this.visibleDiv = 'aboutMe';
    });

    // Listen for dropdown close events to hide the div
    this.renderer.listen(forPatientsMenu, 'hide.bs.dropdown', () => {
      if (this.visibleDiv === 'forPatients') {
        this.visibleDiv = '';
      }
    });

    this.renderer.listen(forProvidersMenu, 'hide.bs.dropdown', () => {
      if (this.visibleDiv === 'forProviders') {
        this.visibleDiv = '';
      }
    });

    this.renderer.listen(aboutMeMenu, 'hide.bs.dropdown', () => {
      if (this.visibleDiv === 'aboutMe') {
        this.visibleDiv = '';
      }
    });

    // Second Header Dropdowns
    const insuranceOptionsMenu = this.el.nativeElement.querySelector('#insuranceOptionsMenu');
    const planningYourRetirementMenu = this.el.nativeElement.querySelector('#planningYourRetirementMenu');
    const healthcareResourcesMenu = this.el.nativeElement.querySelector('#healthcareResourcesMenu');

    this.renderer.listen(insuranceOptionsMenu, 'shown.bs.dropdown', () => {
      this.visibleDiv2 = 'insuranceOptions';
    });

    this.renderer.listen(planningYourRetirementMenu, 'shown.bs.dropdown', () => {
      this.visibleDiv2 = 'planningYourRetirement';
    });

    this.renderer.listen(healthcareResourcesMenu, 'shown.bs.dropdown', () => {
      this.visibleDiv2 = 'healthcareResources';
    });

    // Listen for dropdown close events to hide the div
    this.renderer.listen(insuranceOptionsMenu, 'hide.bs.dropdown', () => {
      if (this.visibleDiv2 === 'insuranceOptions') {
        this.visibleDiv2 = '';
      }
    });

    this.renderer.listen(planningYourRetirementMenu, 'hide.bs.dropdown', () => {
      if (this.visibleDiv2 === 'planningYourRetirement') {
        this.visibleDiv2 = '';
      }
    });

    this.renderer.listen(healthcareResourcesMenu, 'hide.bs.dropdown', () => {
      if (this.visibleDiv2 === 'healthcareResources') {
        this.visibleDiv2 = '';
      }
    });
  }


}
