import { Component, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactMeComponent {
  loading = false;
  showFeedback = false;
  showCareers = false;
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
      this.showFeedback = true;
    }
    else if (numbers === 2) {
      this.showCareers = true;
    }
  }

  resetAllSections(event: Event): void {
    event.preventDefault();
    this.resetSections();
  }

  private resetSections(): void {
    this.showFeedback = false;
    this.showCareers = false;
  }

  showFeedbackSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showFeedback = true;
  }

  showCareersSection(event: Event): void {
    event.preventDefault();
    this.resetAllSections(event);
    this.showCareers = true;
  }

  submitContactUsForm(event: Event) {
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

  submitFeedbackForm(event: Event) {
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

    this.http.post('https://formspree.io/f/xqazvgdl', formData).subscribe(
      response => {
        this.loading = false;
        this.snackBar.open('Thank you for your feedback!', 'Close', {
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

  submitCareersForm(event: Event) {
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

    this.http.post('https://formspree.io/f/xjkbqpey', formData).subscribe(
      response => {
        this.loading = false;
        this.snackBar.open('Thank you for your application! We will be in touch soon.', 'Close', {
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
