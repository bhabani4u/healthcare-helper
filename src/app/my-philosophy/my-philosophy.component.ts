import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-philosophy',
  templateUrl: './my-philosophy.component.html',
  styleUrl: './my-philosophy.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MyPhilosophyComponent implements OnInit {
  showAboutTheFounderSection = false;
  loading = false;

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private route: ActivatedRoute) {}

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
      this.showAboutTheFounderSection = true;
    }
  }

  resetAllSections(event: Event): void {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections(): void {
    this.showAboutTheFounderSection = false;
  }

  showPhilosophy(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
  }

  showAboutTheFounder(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showAboutTheFounderSection = true;
  }

  showNoAggressiveSales(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
  }

  submitForm(event: Event) {
    event.preventDefault();
    this.loading = true;

    const form = event.target as HTMLFormElement;

    // Get checkbox values
    const featureUpdatesChecked = (form.querySelector('#featureUpdates') as HTMLInputElement).checked;
    const termsOfUseChecked = (form.querySelector('#termsOfUse') as HTMLInputElement).checked;

    // Check if both checkboxes are checked
    if (!featureUpdatesChecked || !termsOfUseChecked) {
      this.loading = false;
      this.snackBar.open('Please check the required fields.', 'Close', {
        duration: 3000,
      });
      return; // Stop form submission if checkboxes are not checked
    }

    const formData = new FormData(form);

    this.http.post('https://formspree.io/f/xzzplkak', formData).subscribe(
      response => {
        this.loading = false;
        this.snackBar.open('Thank you for your message. We will get back to you soon!', 'Close', {
          duration: 3000,
        });
        form.reset();
      },
      error => {
        this.loading = false;
        this.snackBar.open('Something went wrong. Please try again later.', 'Close', {
          duration: 3000,
        });
      }
    );
  }

}
