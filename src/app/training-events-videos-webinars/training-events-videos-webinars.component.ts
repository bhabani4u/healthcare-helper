import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-training-events-videos-webinars',
  templateUrl: './training-events-videos-webinars.component.html',
  styleUrl: './training-events-videos-webinars.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TrainingEventsVideosWebinarsComponent {
  enrollmentPeriods = [
    {
      title: '1. Initial Enrollment Period (IEP)',
      description: 'Begins three months before you turn 65, includes the month you turn 65, and ends three months after you turn 65.'
    },
    {
      title: '2. General Enrollment Period (GEP)',
      description: 'Runs from January 1 to March 31 each year if you didn’t sign up for Medicare Part B when you were first eligible. Your coverage will start July 1 of that year.'
    },
    {
      title: '3. Special Enrollment Period (SEP)',
      description: 'If you’re covered under a group health plan based on current employment, you can sign up for Part B anytime you are still covered by the group health plan or during the 8-month period that begins the month the employment ends or the coverage ends, whichever happens first.'
    }
  ];

  helpfulTips = [
    {
      title: 'Review Your Coverage Annually',
      description: 'Medicare plans can change each year, so it’s important to review your coverage during the Annual Enrollment Period (October 15 - December 7).'
    },
    {
      title: 'Utilize Preventive Services',
      description: 'Medicare covers many preventive services to keep you healthy, including screenings, vaccines, and annual wellness visits.'
    },
    {
      title: 'Seek Help When Needed',
      description: 'Use resources like Medicare.gov, State Health Insurance Assistance Programs (SHIP), and trusted insurance agents to help you navigate your options.'
    }
  ];
}
