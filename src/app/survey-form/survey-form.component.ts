import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent {
  loading = false;
  submitted = false;
  currentYear = new Date().getFullYear();
  constructor(private http: HttpClient, private snackBar: MatSnackBar, private router: Router) {}

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

    this.http.post('https://formspree.io/f/xyzgqbdn', formData).subscribe(
      response => {
        this.loading = false;
        this.submitted = true;
        this.snackBar.open('Thank you for completing the survey!', 'Close', {
          duration: 3000,
        });
        form.reset();
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 3000);
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
