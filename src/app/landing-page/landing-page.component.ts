import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  loading = false;
  testimonials: { text: string; author: string; }[] = [
    { text: "Someone had changed my grandmother's insurance without her knowledge. Our doctor encouraged us to call Gordon from Healthcare Helper. We were hesitant at first, but he cleared everything up within one hour.", author: "Esme A." },
    { text: "No sales pitch, no nonsense, just straightforward and clear, just the way I like it.", author: "Dave D." },
    { text: "My mother was referred to Gordon by her friend so I asked to speak to him. He really knows his stuff, and I'm so grateful we can call him anytime we get stuck.", author: "Mohammed D." },
    { text: "I called Gordon while I was hospitalized, just as he told me to, and he helped make sure I got all the resources available from my plan.", author: "Lauren F." },
    { text: "Healthcare Helper made sure that I had the best doctors and the best hospital. I have no regrets.", author: "Victoria L." },
    { text: "There's no other healthcare and health insurance website that has the level of clear information and tools that healthcarehelper.net has. This site has everything.", author: "Jerry T." },
    { text: "Because of Gordon's help fixing her medical insurance, my wife was able to extend her life by another 18 months. I treasured those remaining months with her.", author: "Sandy P." },
    { text: "I was on the phone once for two hours with my insurance and couldn't get anything resolved. Healthcare Helper joined me on a conference call and we resolved the issue in literally 5 minutes. Wow.", author: "Simon P." },
    { text: "I trust Gordon for everything insurance related. If he doesn't know the answer he'll tell me, and also give me a referral to someone who will.", author: "Amy D." },
    { text: "I've never met an insurance agent who made things so clear and begins with the numbers first. Healthcare Helper made the process so easy.", author: "Patrick W." },
    { text: "The Medicare trainings Healthcare Helper gives are so informative. I only wish I did one before enrolling into Medicare.", author: "Lori M." },
    { text: "My doctor's office was speaking to me about my insurance, but it was so confusing. I called Gordon because, 'No one can explain how it works better than Gordon!'", author: "Sherry B." },
    { text: "I never know if the letters or calls I receive are a scam or not. I always run it by Healthcare Helper to be sure.", author: "Aida J." },
    { text: "I'm so scared and frustrated with getting burned. With Healthcare Helper, I don't have to worry about that anymore.", author: "Dorita C." },
    { text: "Healthcare Helper's plan comparisons make it easy for me to know whether or not I'm in the best plan for my needs.", author: "Charles S." },
    { text: "No one I've ever met seemed to give me a straight answer whether or not my doctors and my hospital are in network. That is until I was referred to Gordon at Healthcare Helper.", author: "" },
    { text: "I was hesitant at first when I first met with Gordon because agents always try to convince you to change your plan in order to get a commission. But when he told me I shouldn't change my plan, I knew from then on I could trust him with my insurance.", author: "Nick E." }
  ];

  groupedTestimonials: { text: string; author: string; }[][] = [];

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.groupTestimonials();

  }
  groupTestimonials() {
    const itemsPerGroup = 3;
    for (let i = 0; i < this.testimonials.length; i += itemsPerGroup) {
      this.groupedTestimonials.push(this.testimonials.slice(i, i + itemsPerGroup));
    }
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
