import { Component, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackComponent {
  loading = false;

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private route: ActivatedRoute) {}

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
}
